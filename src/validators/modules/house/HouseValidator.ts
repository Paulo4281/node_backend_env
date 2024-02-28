import { body, ValidationChain } from "express-validator";
import { apiValidationErros } from "../../../utils/api/ApiValidationErrors";

class HouseValidator {

    public saveValidator: ValidationChain[];
    public updateValidator: ValidationChain[];

    constructor() {
        this.saveValidator = this.saveValidatorBuilder();
        this.updateValidator = this.updateValidatorBuilder();
    }

    private saveValidatorBuilder(): ValidationChain[] {
        return [
            body("address", apiValidationErros.isString).isString(),
            body("address", apiValidationErros.notEmpty).notEmpty(),
            body("type", apiValidationErros.isString).isString(),
            body("type", apiValidationErros.notEmpty).notEmpty(),
            body("area", apiValidationErros.isString).isString(),
            body("area", apiValidationErros.notEmpty).notEmpty(),
            body("rooms", apiValidationErros.isInt).isInt(),
            body("rooms", apiValidationErros.notEmpty).notEmpty(),
            body("bathrooms", apiValidationErros.isInt).isInt(),
            body("bathrooms", apiValidationErros.notEmpty).notEmpty(),
            body("parkingSpaces", apiValidationErros.isInt).isInt(),
            body("parkingSpaces", apiValidationErros.notEmpty).notEmpty(),
            body("description", apiValidationErros.isString).isString(),
            body("salePrice", apiValidationErros.isDecimal).isDecimal(),
            body("rentPrice", apiValidationErros.isDecimal).isDecimal(),
            body("saleAvailable", apiValidationErros.isBoolean).isBoolean(),
            body("saleAvailable", apiValidationErros.notEmpty).notEmpty(),
            body("rentAvailable", apiValidationErros.isBoolean).isBoolean(),
            body("rentAvailable", apiValidationErros.notEmpty).notEmpty()
        ]
    }

    private updateValidatorBuilder(): ValidationChain[] {
        return [
            body("address", apiValidationErros.isString).isString(),
            body("type", apiValidationErros.isString).isString(),
            body("area", apiValidationErros.isString).isString(),
            body("rooms", apiValidationErros.isInt).isInt(),
            body("bathrooms", apiValidationErros.isInt).isInt(),
            body("parkingSpaces", apiValidationErros.isInt).isInt(),
            body("description", apiValidationErros.isString).isString(),
            body("salePrice", apiValidationErros.isDecimal).isDecimal(),
            body("rentPrice", apiValidationErros.isDecimal).isDecimal(),
            body("saleAvailable", apiValidationErros.isBoolean).isBoolean(),
            body("rentAvailable", apiValidationErros.isBoolean).isBoolean()
        ]
    }

};

export { HouseValidator }