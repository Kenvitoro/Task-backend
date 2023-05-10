import database from '../config/database';
import { Task } from '../entities/Task.entity';

class TaskService {
  private taskRepository = database.getRepository(Task);

  async getAllTasks() {
    const tasks = await this.taskRepository.find();
    return tasks;
  }

  async getTaskById(id: number) {
    const task = await this.taskRepository.findOneBy({id: id as any});
    return task;
  }

  async createTask(data: Partial<Task> ) {

    const task = this.taskRepository.create(data)
    
    await this.taskRepository.save(task);
    
    return task;
  }

  async updateTask(id: number, updatedTask: Task) {
    const taskToUpdate = await this.getTaskById(id);
    if (!taskToUpdate) {
      return null;
    }
    const mergedTask = this.taskRepository.merge(taskToUpdate, updatedTask);
    const result = await this.taskRepository.save(mergedTask);
    return result;
  }

  async deleteTask(id: number) {
    const taskToDelete = await this.getTaskById(id);
    if (!taskToDelete) {
      return null;
    }
    await this.taskRepository.remove(taskToDelete);
    return taskToDelete;
  }
}

export default TaskService;