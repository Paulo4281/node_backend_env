import { User } from "../entities/User";

interface IUser extends Omit<User, ""> {};

interface IUserDTO extends Omit<IUser, "id" | "createdAt" | "updatedAt"> {};

interface IUserResponseDTO extends IUser {};

interface IUserUpdateDTO extends IUserDTO {};

export {
    IUserDTO,
    IUserResponseDTO,
    IUserUpdateDTO
}