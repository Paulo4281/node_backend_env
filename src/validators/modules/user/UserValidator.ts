import { body, ValidationChain } from "express-validator";
import { apiValidationErros } from "../../../utils/api/ApiValidationErrors";

class UserValidator {

    public authValidator: ValidationChain[];
    public saveValidator: ValidationChain[];
    public updateValidator: ValidationChain[];

    constructor() {
        this.authValidator = this.authValidatorBuilder();
        this.saveValidator = this.saveValidatorBuilder();
        this.updateValidator = this.updateValidatorBuilder();
    }

    private authValidatorBuilder(): ValidationChain[] {
        return [
            body("mail", apiValidationErros.isString).isString(),
            body("mail", apiValidationErros.notEmpty).notEmpty(),
            body("mail", apiValidationErros.isEmail).isEmail(),
            body("password", apiValidationErros.isString).isString(),
            body("password", apiValidationErros.notEmpty).notEmpty(),
        ]
    }

    private saveValidatorBuilder(): ValidationChain[] {
        return [
            body("name", apiValidationErros.isString).isString(),
            body("name", apiValidationErros.notEmpty).notEmpty(),
            body("mail", apiValidationErros.isString).isString(),
            body("mail", apiValidationErros.isEmail).isEmail(),
            body("mail", apiValidationErros.notEmpty).notEmpty(),
            body("password", apiValidationErros.isString).isString(),
            body("password", apiValidationErros.notEmpty).notEmpty(),
            body("password", apiValidationErros.isLength).isLength({ min: 6 }),
            body("birth", apiValidationErros.isString).isString(),
            body("birth", apiValidationErros.notEmpty).notEmpty()
        ]
    }

    private updateValidatorBuilder(): ValidationChain[] {
        return [
            body("name", apiValidationErros.isString).optional().isString(),
            body("name", apiValidationErros.notEmpty).optional().notEmpty(),
            body("mail", apiValidationErros.isString).optional().isString(),
            body("mail", apiValidationErros.isEmail).optional().isEmail(),
            body("mail", apiValidationErros.notEmpty).optional().notEmpty(),
            body("password", apiValidationErros.isString).optional().isString(),
            body("password", apiValidationErros.notEmpty).optional().notEmpty(),
            body("password", apiValidationErros.isLength).optional().isLength({ min: 6 }),
            body("birth", apiValidationErros.isString).optional().isString(),
            body("birth", apiValidationErros.notEmpty).optional().notEmpty()
        ]
    }

}

export { UserValidator };