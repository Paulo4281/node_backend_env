import dotenv from "dotenv";
import swaggerAutogen from "swagger-autogen";
import { resolve } from "path";
import * as TJS from "typescript-json-schema";

dotenv.config();

const UserDTO = TJS.buildGenerator(
    TJS.getProgramFromFiles(
        [resolve("./src/modules/user/dtos/UserDTO.ts")]
    )
);

const doc = {
    info: {
        title: "NodeJS Backend Enviroment",
        description: "Description"
    },
    host: process.env.SERVER_HOST_URL,
    schemes: ["http", "https"],
    "@definitions": {
    // User
        IUser: UserDTO?.getSchemaForSymbol("IUser"),
        IUserDTO: UserDTO?.getSchemaForSymbol("IUserDTO"),
        IUserResponseDTO: UserDTO?.getSchemaForSymbol("IUserResponseDTO"),
        IUserUpdateDTO: UserDTO?.getSchemaForSymbol("IUserUpdateDTO"),
        IUserResponseListDTO: {
            type: "array",
            items: { $ref: "#/definitions/IUserResponseDTO" }
        },
    // User Auth
        IUserAuthDTO: UserDTO?.getSchemaForSymbol("IUserAuthDTO"),
        IUserAuthResponseDTO: UserDTO?.getSchemaForSymbol("IUserAuthResponseDTO")
    },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./src/routes/index.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);