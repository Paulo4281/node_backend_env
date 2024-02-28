import { IHouseDTO, IHouseResponseDTO, IHouseUpdateDTO } from "../../dtos/HouseDTO";

interface IHouseRepository {
    save(houseDTO: IHouseDTO): Promise<IHouseResponseDTO>
}

export { IHouseRepository };