import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const apiValidationHandler = (request: Request, response: Response, next: NextFunction) => {
    const validation = validationResult(request);
    if (validation.isEmpty()) {
        next();
    } else {
        return response.status(422).json({ error: validation.array() });
    }
};

export { apiValidationHandler };