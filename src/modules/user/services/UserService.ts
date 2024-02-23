import { inject, injectable } from "tsyringe";
import { validate as uuidValidate } from "uuid";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { IUserDTO, IUserResponseDTO, IUserUpdateDTO } from "../dtos/UserDTO";
import { User } from "../entities/User";
import { hashSync, genSaltSync } from "bcrypt";
import { AppError } from "../../../utils/errors/AppError";

@injectable()
class UserService {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async save(userDTO: IUserDTO): Promise<IUserResponseDTO> {
        const user = new User();

        const passwordSalt = genSaltSync(8);
        const passwordHash = hashSync(userDTO.password, passwordSalt)

        user.name = userDTO.name;
        user.mail = userDTO.mail;
        user.password = passwordHash;
        user.birth = userDTO.birth;
        user.createdAt = new Date();

        return this.userRepository.save(user);
    }

    async find(): Promise<IUserResponseDTO[]> {
        return this.userRepository.find()
    }

    async findById(id: string): Promise<IUserResponseDTO | null> {
        if (!uuidValidate(id)) {
            throw new AppError("UUID Inválido.", 400);
        }
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new AppError("Não encontrado.", 400);
        }
        return user;
    }

    async update(id: string, userDTO: IUserUpdateDTO): Promise<void> {
        const user = await this.findById(id);

        if (user) {
            if (userDTO.password) {
                const passwordSalt = genSaltSync(8);
                const passwordHash = hashSync(userDTO.password, passwordSalt);
    
                user.name = userDTO.name;
                user.mail = userDTO.mail;
                user.birth = userDTO.birth;
                user.password = passwordHash;
                user.updatedAt = new Date();
            } else {
                user.name = userDTO.name;
                user.mail = userDTO.mail;
                user.birth = userDTO.birth;
                user.updatedAt = new Date();
            }
    
            await this.userRepository.update(id, user);
        }

    }

    async delete(id: string): Promise<void> {
        await this.findById(id);
        await this.userRepository.delete(id);
    }

};

export { UserService };