import { House } from "../../entities/House";
import { Repository } from "typeorm";
import { AppDataSource, AppDataSourceTest } from "../../../../config/database/database";
import { IHouseRepository } from "../interfaces/IHouseRepository";
import { IHouseDTO, IHouseResponseDTO, IHouseUpdateDTO } from "../../dtos/HouseDTO";

class HouseRepository implements IHouseRepository {

    private repository: Repository<House>;

    constructor() {
        if (process.env.TEST === "test") {
            this.repository = AppDataSourceTest.getRepository(House);
        } else {
            this.repository = AppDataSource.getRepository(House);
        }
    };

    async save(houseDTO: IHouseDTO): Promise<IHouseResponseDTO> {
        return this.repository.save(houseDTO);
    };

};

export { HouseRepository };