import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserService } from "../services/UserService";

class UserController {

    async auth(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UserService);
        const data = await service.auth(request.body);
        return response.json(data);
    }

    async save(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UserService);
        const data = await service.save(request.body);
        return response.status(201).json(data);
    }

    async find(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UserService);
        const data = await service.find();
        return response.json(data);
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = container.resolve(UserService);
        const data = await service.findById(id);
        return response.json(data);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = container.resolve(UserService);
        await service.update(id, request.body);
        return response.send()
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = container.resolve(UserService);
        await service.delete(id);
        return response.send();
    }

};

export { UserController };