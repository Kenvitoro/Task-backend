import { Request, Response } from 'express';
import { User } from '../entities/user.entity';
import UserService from '../services/user.service';

const userService = new UserService();

export class UserController {
  async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    return res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await userService.getUserById(parseInt(id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  }

  async createUser(req: Request, res: Response) {

    const body = req.body;
    const createdUser = await userService.createUser(body)
    return res.status(200).json(createdUser);

    /*const { name, email } = req.body;
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    const createdUser = await userService.createUser(newUser);
    return res.json(createdUser);*/
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = new User();
    updatedUser.name = name;
    updatedUser.email = email;
    const result = await userService.updateUser(parseInt(id), updatedUser);
    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(result);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const deletedUser = await userService.deleteUser(parseInt(id));
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(deletedUser);
  }
}

export default UserController;