import { Router } from "express";
import { UserController } from "../modules/user/controllers/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post(
    "/",
    // auth
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
    // auth,
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
    // auth,
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
    // auth,
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
    // auth,
    userController.delete
    /*
        #swagger.tags = ["User"]
        #swagger.responses[204]
    */
)

export { userRoutes };