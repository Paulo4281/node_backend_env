import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
    type: `${process.env.DATABASE_TYPE}`,
    host: `${process.env.DATABASE_HOST}`,
    port: `${process.env.DATABASE_PORT}`,
    username: `${process.env.DATABASE_USERNAME}`,
    password: `${process.env.DATABASE_PASSWORD}`,
    database: `${process.env.DATABASE_NAME}`
});

AppDataSource.initialize()
.then(() => {
    console.log("Database connected!")
})
.catch((error) => {
    console.error(`Error during database connection: ${error}`)
});