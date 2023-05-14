"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Task_entity_1 = require("../entities/Task.entity");
const Category_entity_1 = require("../entities/Category.entity");
const user_entity_1 = require("../entities/user.entity");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const database = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.HOST_DB,
    port: process.env.PORT_DB ? parseInt(process.env.PORT_DB) : undefined,
    username: process.env.USER_NAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    synchronize: true,
    entities: [Category_entity_1.Category, user_entity_1.User, Task_entity_1.Task],
});
exports.default = database;
//# sourceMappingURL=database.js.map