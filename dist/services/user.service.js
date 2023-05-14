"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const user_entity_1 = require("../entities/user.entity");
class UserService {
    constructor() {
        this.userRepository = database_1.default.getRepository(user_entity_1.User);
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.find();
            return users;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOneBy({ id: id });
            return user;
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.userRepository.create(data);
            yield this.userRepository.save(user);
            return user;
            /*const createdUser = await this.userRepository.save(newUser);
            return createdUser;*/
        });
    }
    updateUser(id, updatedUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToUpdate = yield this.getUserById(id);
            if (!userToUpdate) {
                return null;
            }
            const mergedUser = this.userRepository.merge(userToUpdate, updatedUser);
            const result = yield this.userRepository.save(mergedUser);
            return result;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userToDelete = yield this.getUserById(id);
            if (!userToDelete) {
                return null;
            }
            yield this.userRepository.remove(userToDelete);
            return userToDelete;
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map