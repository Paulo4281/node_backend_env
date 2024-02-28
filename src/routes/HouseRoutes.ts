import { Router } from "express";
import { HouseController } from "../modules/house/controllers/HouseController";
import { HouseValidator } from "../validators/modules/house/HouseValidator";
import { apiValidationHandler } from "../utils/api/ApiValidationHandler";

const houseRoutes = Router();
const houseController = new HouseController();
const houseValidator = new HouseValidator();

houseRoutes.post(
    "/",
    houseValidator.saveValidator,
    apiValidationHandler,
    houseController.save
    /*
        #swagger.tags = ["House"]
        #swagger.parameters["body"] = {
            in: "body",
            required: true,
            schema: { $ref: "#/definitions/IHouseDTO" }
        }
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/IHouseResponseDTO" }
        }
    */
)

export { houseRoutes };