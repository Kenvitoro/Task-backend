"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
const TaskRouter = (0, express_1.Router)();
const taskController = new task_controller_1.default();
TaskRouter.get('/', taskController.getAllTasks);
TaskRouter.get('/:id', taskController.getTaskById);
TaskRouter.post('/', taskController.createTask);
TaskRouter.put('/:id', taskController.updateTask);
TaskRouter.delete('/:id', taskController.deleteTask);
exports.default = TaskRouter;
//# sourceMappingURL=Task.routes.js.map