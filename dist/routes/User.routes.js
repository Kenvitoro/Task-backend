"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const UserRouter = (0, express_1.Router)();
const userController = new user_controller_1.UserController();
UserRouter.get('/', userController.getAllUsers);
UserRouter.get('/:id', userController.getUserById);
UserRouter.post('/', userController.createUser);
UserRouter.put('/:id', userController.updateUser);
UserRouter.delete('/:id', userController.deleteUser);
exports.default = UserRouter;
//# sourceMappingURL=User.routes.js.map