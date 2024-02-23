import { Router } from "express";
import { userRoutes } from "./UserRoutes";

const router = Router();

// User Routes
router.use("/user", userRoutes);

export { router };