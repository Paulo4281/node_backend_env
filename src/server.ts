import { ValidationError } from "class-validator";
import { AppError } from "./utils/errors/AppError";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./modules/routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger.json";
import "./config/database/database";

dotenv.config();

const app = express();

// APP CONFIG
app.use(express.json({ limit: "1024mb" }));
app.use(cors());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                message: error.message
            })
        }
        if (error instanceof ValidationError) {
            return response.status(400).json({ message: error.message })
        }
        else {
            return response.status(500).json({
                status: `Error: ${error.name}`,
                message: `Internal Server Error: ${error.message}`
            })
        }
    }
)

// API INIT
app.get("/", (request: Request, response: Response) => {
    return response.json({ status: "Connected!" });
});

// APP PORT LISTENING
const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));