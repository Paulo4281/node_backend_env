import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import dotenv from "dotenv";

dotenv.config();

function authenticate(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token não encontrado", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
        throw new AppError("Token inválido", 401);
    }

}

export { authenticate };