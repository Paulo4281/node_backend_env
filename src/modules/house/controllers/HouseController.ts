import { Request, Response } from "express";
import { container } from "tsyringe";
import { HouseService } from "../services/HouseService";

class HouseController {

    async save(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(HouseService);
    };

};

export { HouseController };