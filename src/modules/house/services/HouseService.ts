import { inject, injectable } from "tsyringe";
import { IHouseRepository } from "../repositories/interfaces/IHouseRepository";
import { IHouseDTO, IHouseResponseDTO, IHouseUpdateDTO } from "../dtos/HouseDTO";
import { House } from "../entities/House";
@injectable()
class HouseService {
    constructor(
        @inject("HouseRepository")
        private houseRepository: IHouseRepository 
    ) {}

    async save(houseDTO: IHouseDTO): Promise<IHouseResponseDTO> {
        const house = new House()

        house.type = houseDTO.type
        house.address = houseDTO.address;
        house.area = houseDTO.area;
        house.bathrooms = houseDTO.bathrooms;
        house.parkingSpaces = houseDTO.parkingSpaces;
        house.rooms = houseDTO.rooms;
        house.description = houseDTO.description;
        house.rentAvailable = houseDTO.rentAvailable;
        house.rentPrice = houseDTO.rentPrice;
        house.saleAvailable = houseDTO.saleAvailable;
        house.salePrice = houseDTO.salePrice;
        house.createdAt = new Date();
        
        return this.houseRepository.save(house)
    } 
};

export { HouseService };