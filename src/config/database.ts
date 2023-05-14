import { DataSource } from "typeorm";
import { Task } from "../entities/Task.entity";
import { Category } from "../entities/Category.entity";
import { User } from "../entities/user.entity";
import * as dotenv from 'dotenv'
dotenv.config()

const database = new DataSource({
    type: "postgres",
    host: process.env.HOST_DB,
    port: process.env.PORT_DB ? parseInt(process.env.PORT_DB) : undefined,
    username: process.env.USER_NAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    synchronize: true,
    entities: [Category, User, Task],
})


export default database;