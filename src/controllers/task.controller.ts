import { Request, Response } from 'express';
import { Task } from '../entities/Task.entity';
import TaskService from '../services/task.service';

const taskService = new TaskService();

class TaskController {
  async getAllTasks(req: Request, res: Response) {
    const tasks = await taskService.getAllTasks();
    return res.json(tasks);
  }

  async getTaskById(req: Request, res: Response) {
    const { id } = req.params;
    const task = await taskService.getTaskById(parseInt(id));
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    return res.json(task);
  }

   async createTask(req: Request, res: Response) {
    const body = req.body;
    const createdTask = await taskService.createTask(body);
    return res.status(200).json(createdTask);
  }

  async updateTask(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTask = new Task();
    updatedTask.title = title;
    updatedTask.description = description;
    const result = await taskService.updateTask(parseInt(id), updatedTask);
    if (!result) {
      return res.status(404).json({ message: 'Task not found' });
    }
    return res.json(result);
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params;
    const deletedTask = await taskService.deleteTask(parseInt(id));
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    return res.json(deletedTask);
  }
}

export default TaskController