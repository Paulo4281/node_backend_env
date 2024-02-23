import { Repository } from "typeorm";
import { AppDataSource } from "../../../../config/database/database";
import { User } from "../../entities/User";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IUserDTO, IUserResponseDTO, IUserUpdateDTO } from "../../dtos/UserDTO";

class UserRepository implements IUserRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    async save(userDTO: IUserDTO): Promise<IUserResponseDTO> {
        return this.repository.save(userDTO);
    }

    async find(): Promise<IUserResponseDTO[]> {
        return this.repository.find()
    }

    async findById(id: string): Promise<IUserResponseDTO | null> {
        return this.repository.findOneBy({ id });
    }

    async update(id: string, userDTO: IUserUpdateDTO): Promise<void> {
        await this.repository.update({ id }, userDTO);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }

}

export { UserRepository };