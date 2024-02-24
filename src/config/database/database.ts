import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
    type: "mysql",
    host: `${process.env.DATABASE_HOST}`,
    port: Number(`${process.env.DATABASE_PORT}`),
    username: `${process.env.DATABASE_USERNAME}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`,
    synchronize: false,
    logging: false,
    entities: ["./src/modules/**/entities/*.ts"],
    charset: "utf8mb4"
});

const AppDataSourceTest = new DataSource({
    type: "mysql",
    host: `${process.env.DATABASE_HOST_TEST}`,
    port: Number(`${process.env.DATABASE_PORT_TEST}`),
    username: `${process.env.DATABASE_USERNAME_TEST}`,
    password: `${process.env.DATABASE_PASSWORD_TEST}`,
    database: `${process.env.DATABASE_NAME_TEST}`,
    synchronize: false,
    logging: false,
    entities: ["./src/modules/**/entities/*.ts"],
    charset: "utf8mb4"
});

AppDataSource.initialize()
.then(() => {
    console.log("Database connected!")
})
.catch((error) => {
    console.error(`Error during database connection: ${error}`)
});

export { AppDataSource, AppDataSourceTest };