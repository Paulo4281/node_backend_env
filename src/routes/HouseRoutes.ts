import { Router } from "express";
import { HouseController } from "../modules/house/controllers/HouseController";
import { HouseValidator } from "../validators/modules/house/HouseValidator";
import { apiValidationHandler } from "../utils/api/ApiValidationHandler";

const houseRoutes = Router();
const houseController = new HouseController();
const houseValidator = new HouseValidator();

houseRoutes.post(
    "/",
)

export { houseRoutes };