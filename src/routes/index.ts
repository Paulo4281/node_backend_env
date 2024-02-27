import { Router } from "express";
import { userRoutes } from "./UserRoutes";
import { houseRoutes } from "./HouseRoutes";
import { authenticate } from "../utils/middlewares/authenticate";

const router = Router();

// User Routes
router.use("/user", userRoutes);

// House Routes
router.use("/house", authenticate, houseRoutes)

export { router };