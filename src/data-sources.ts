
import "reflect-metadata";
import { DataSource } from "typeorm";
import { product } from "./entities/product";
export const AppDataSource = new DataSource({
    type: "sqlite", 
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [product],
    migrations: [],
    subscribers: []
});