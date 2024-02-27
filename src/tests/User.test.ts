import { AppDataSourceTest } from "../config/database/database";
import { UserRepository } from "../modules/user/repositories/implementations/UserRepository";
import { IUserDTOTest, IUserResponseDTO, IUserAuthDTO, IUserAuthResponseDTO, IUserUpdateDTO } from "../modules/user/dtos/UserDTO";
import { v4 as uuidv4 } from "uuid"

let repository: UserRepository;

beforeAll(async () => {
    await AppDataSourceTest.initialize();
    repository = new UserRepository();
});

describe("User Module", () => {

    it("must create and return IUserResponse", async () => {

        const examplePayload: IUserDTOTest = {
            id: uuidv4(),
            name: "Test",
            mail: "test@gmail.com",
            password: "test1234",
            birth: new Date("1990-01-01"),
            createdAt: new Date()
        };
        const expectedResponse: IUserResponseDTO = {};
        
        const response = await repository.save(examplePayload);
        
        expect(typeof(response)).toBe(typeof(expectedResponse));

    });
    
    it("must return IUserReponseDTO[]", async () => {
        
        const response = await repository.find();
        const expectedResponse: IUserResponseDTO[] = [];

        expect(Array.isArray(response)).toBe(true);

        if (Array.isArray(response)) {
            expect(typeof(response)).toBe(typeof(expectedResponse));
        }

    });

});