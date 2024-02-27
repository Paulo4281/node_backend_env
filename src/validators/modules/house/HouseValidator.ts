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
            body("type").isString(),
            body("")
        ]
    }

    private updateValidatorBuilder(): ValidationChain[] {

    }

};

export { HouseValidator }