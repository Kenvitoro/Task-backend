
import database from '../config/database';
import { User } from '../entities/user.entity';

class UserService {
  private userRepository = database.getRepository(User);

  async getAllUsers() {
    const users = await this.userRepository.find();
    return users;
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOneBy({id: id as any});
    return user;
  }

  async createUser(data: Partial<User>) {

    const user = this.userRepository.create(data)
    
    await this.userRepository.save(user);
    
    return user;

    /*const createdUser = await this.userRepository.save(newUser);
    return createdUser;*/
  }

  async updateUser(id: number, updatedUser: User) {
    const userToUpdate = await this.getUserById(id);
    if (!userToUpdate) {
      return null;
    }
    const mergedUser = this.userRepository.merge(userToUpdate, updatedUser);
    const result = await this.userRepository.save(mergedUser);
    return result;
  }

  async deleteUser(id: number) {
    const userToDelete = await this.getUserById(id);
    if (!userToDelete) {
      return null;
    }
    await this.userRepository.remove(userToDelete);
    return userToDelete;
  }
}

export default UserService;
