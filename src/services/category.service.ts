import database from '../config/database';
import { Category } from '../entities/Category.entity';

class CategoryService {
  private categoryRepository = database.getRepository(Category);

  async getAllCategories() {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async getCategoryById(id: number) {
    const category = await this.categoryRepository.findOneBy({id: id as any});
    return category;
  }

  async createCategory(data: Partial<Category>) {

    const task = this.categoryRepository.create(data)
    
    await this.categoryRepository.save(task);
    
    return task;

    /*const createdCategory = await this.categoryRepository.save(newCategory);
    return createdCategory;*/
  }

  async updateCategory(id: number, updatedCategory: Category) {
    const categoryToUpdate = await this.getCategoryById(id);
    if (!categoryToUpdate) {
      return null;
    }
    const mergedCategory = this.categoryRepository.merge(categoryToUpdate, updatedCategory);
    const result = await this.categoryRepository.save(mergedCategory);
    return result;
  }

  async deleteCategory(id: number) {
    const categoryToDelete = await this.getCategoryById(id);
    if (!categoryToDelete) {
      return null;
    }
    await this.categoryRepository.remove(categoryToDelete);
    return categoryToDelete;
  }
}

export default CategoryService;
