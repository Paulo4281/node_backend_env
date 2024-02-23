import { User } from "../entities/User";

interface IUser extends Omit<User, ""> {};

interface IUserDTO extends Omit<IUser, "id" | "createdAt" | "updatedAt"> {};

interface IUserResponseDTO extends IUser {};

interface IUserUpdateDTO extends IUserDTO {};

interface IUserAuthDTO extends Required<Pick<IUser, "mail" | "password">> {};

interface IUserAuthResponseDTO {
    token: string
};

export {
    IUserDTO,
    IUserResponseDTO,
    IUserUpdateDTO,
    IUserAuthDTO,
    IUserAuthResponseDTO
};