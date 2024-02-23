import { Router } from "express";
import { UserController } from "../modules/user/controllers/UserController";
import { UserValidator } from "../validators/modules/user/UserValidator";
import { apiValidationHandler } from "../utils/api/ApiValidationHandler";
import { authenticate } from "../utils/middlewares/authenticate";

const userRoutes = Router();
const userController = new UserController();
const userValidator = new UserValidator();

userRoutes.post(
    "/",
    userValidator.saveValidator,
    apiValidationHandler,
    authenticate,
    userController.save
    /*
        #swagger.tags = ["User"]
        #swagger.parameters["body"] = {
            in: "body",
            required: true,
            schema: { $ref: "#/definitions/IUserDTO" }
        }
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/IUserResponseDTO" }
        }
    */
);

userRoutes.get(
    "/",
    authenticate,
    userController.find
    /*
        #swagger.tags = ["User"]
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/IUserResponseListDTO" }
        }
    */
);

userRoutes.get(
    "/:id",
    authenticate,
    userController.findById
    /*
        #swagger.tags = ["User"]
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/IUserResponseDTO" }
        }
    */
)

userRoutes.put(
    "/:id",
    userValidator.updateValidator,
    apiValidationHandler,
    authenticate,
    userController.update
    /*
        #swagger.tags = ["User"]
        #swagger.parameters["body"] = {
            in: "body",
            required: true,
            schema: { $ref: "#/definitions/IUserUpdateDTO" }
        }
        #swagger.responses[204]
    */
)

userRoutes.delete(
    "/:id",
    authenticate,
    userController.delete
    /*
        #swagger.tags = ["User"]
        #swagger.responses[204]
    */
)

export { userRoutes };