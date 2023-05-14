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
const Task_entity_1 = require("../entities/Task.entity");
class TaskService {
    constructor() {
        this.taskRepository = database_1.default.getRepository(Task_entity_1.Task);
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield this.taskRepository.find();
            return tasks;
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.taskRepository.findOneBy({ id: id });
            return task;
        });
    }
    createTask(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = this.taskRepository.create(data);
            yield this.taskRepository.save(task);
            return task;
        });
    }
    updateTask(id, updatedTask) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskToUpdate = yield this.getTaskById(id);
            if (!taskToUpdate) {
                return null;
            }
            const mergedTask = this.taskRepository.merge(taskToUpdate, updatedTask);
            const result = yield this.taskRepository.save(mergedTask);
            return result;
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskToDelete = yield this.getTaskById(id);
            if (!taskToDelete) {
                return null;
            }
            yield this.taskRepository.remove(taskToDelete);
            return taskToDelete;
        });
    }
}
exports.default = TaskService;
//# sourceMappingURL=task.service.js.map