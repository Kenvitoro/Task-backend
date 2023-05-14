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
const Task_entity_1 = require("../entities/Task.entity");
const task_service_1 = __importDefault(require("../services/task.service"));
const taskService = new task_service_1.default();
class TaskController {
    getAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield taskService.getAllTasks();
            return res.json(tasks);
        });
    }
    getTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const task = yield taskService.getTaskById(parseInt(id));
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.json(task);
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const createdTask = yield taskService.createTask(body);
            return res.status(200).json(createdTask);
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, description } = req.body;
            const updatedTask = new Task_entity_1.Task();
            updatedTask.title = title;
            updatedTask.description = description;
            const result = yield taskService.updateTask(parseInt(id), updatedTask);
            if (!result) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.json(result);
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deletedTask = yield taskService.deleteTask(parseInt(id));
            if (!deletedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.json(deletedTask);
        });
    }
}
exports.default = TaskController;
//# sourceMappingURL=task.controller.js.map