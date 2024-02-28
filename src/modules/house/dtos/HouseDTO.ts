import { House } from "../entities/House";

interface IHouse extends Omit<House, ""> {};

interface IHouseDTO extends Omit<IHouse, "id" | "updatedAt" |"createdAt"> {};

interface IHouseResponseDTO extends IHouse {};

interface IHouseUpdateDTO extends IHouseDTO {};

export {
    IHouseDTO,
    IHouseResponseDTO,
    IHouseUpdateDTO
}