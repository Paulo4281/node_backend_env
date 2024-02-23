import { IUserDTO, IUserResponseDTO, IUserUpdateDTO } from "../../dtos/UserDTO";
import { User } from "../../entities/User";

interface IUserRepository {
    save(userDTO: IUserDTO): Promise<IUserResponseDTO>;
    find(): Promise<IUserResponseDTO[]>;
    findById(id: string): Promise<IUserResponseDTO | null>;
    findByMail(mail: string): Promise<IUserResponseDTO | null>;
    update(id: string, userDTO: IUserResponseDTO): Promise<void>;
    delete(id: string): Promise<void>;
}

export { IUserRepository };