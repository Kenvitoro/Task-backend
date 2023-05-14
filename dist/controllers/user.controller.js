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
exports.UserController = void 0;
const user_entity_1 = require("../entities/user.entity");
const user_service_1 = __importDefault(require("../services/user.service"));
const userService = new user_service_1.default();
class UserController {
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield userService.getAllUsers();
            return res.json(users);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield userService.getUserById(parseInt(id));
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json(user);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const createdUser = yield userService.createUser(body);
            return res.status(200).json(createdUser);
            /*const { name, email } = req.body;
            const newUser = new User();
            newUser.name = name;
            newUser.email = email;
            const createdUser = await userService.createUser(newUser);
            return res.json(createdUser);*/
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, email } = req.body;
            const updatedUser = new user_entity_1.User();
            updatedUser.name = name;
            updatedUser.email = email;
            const result = yield userService.updateUser(parseInt(id), updatedUser);
            if (!result) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json(result);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deletedUser = yield userService.deleteUser(parseInt(id));
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json(deletedUser);
        });
    }
}
exports.UserController = UserController;
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map