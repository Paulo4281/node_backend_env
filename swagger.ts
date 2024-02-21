import dotenv from "dotenv";
import swaggerAutogen from "swagger-autogen";
import { resolve } from "path";
import * as TJS from "typescript-json-schema";

dotenv.config();

const doc = {
    info: {
        title: "NodeJS Backend Enviroment",
        description: "Desc"
    },
    host: process.env.SERVER_HOST_URL,
    schemes: ["http", "https"],
    "@definitions": {

    },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./src/modules/routes/index.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);