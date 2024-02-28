import { container } from "tsyringe";

import { IUserRepository } from "../../modules/user/repositories/interfaces/IUserRepository";
import { UserRepository } from "../../modules/user/repositories/implementations/UserRepository";
import { IHouseRepository } from "../../modules/house/repositories/interfaces/IHouseRepository";
import { HouseRepository } from "../../modules/house/repositories/implementations/HouseRepository";

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);

container.registerSingleton<IHouseRepository>(
    "HouseRepository",
    HouseRepository
);