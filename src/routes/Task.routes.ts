import { Router, Request, Response } from 'express';
import  TaskController  from '../controllers/task.controller';

const TaskRouter = Router();

const taskController = new TaskController();

TaskRouter.get('/', taskController.getAllTasks);
TaskRouter.get('/:id', taskController.getTaskById);
TaskRouter.post('/', taskController.createTask);
TaskRouter.put('/:id', taskController.updateTask);
TaskRouter.delete('/:id', taskController.deleteTask);

export default TaskRouter;
