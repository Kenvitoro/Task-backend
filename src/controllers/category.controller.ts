import { Request, Response } from 'express';
import { Category } from '../entities/Category.entity';
import CategoryService from '../services/category.service';

const categoryService = new CategoryService();

export class CategoryController {
  async getAllCategories(req: Request, res: Response) {
    const categories = await categoryService.getAllCategories();
    return res.json(categories);
  }

  async getCategoryById(req: Request, res: Response) {
    const { id } = req.params;
    const category = await categoryService.getCategoryById(parseInt(id));
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    return res.json(category);
  }

  async createCategory(req: Request, res: Response) {

    const body = req.body;
    const createdCategory = await categoryService.createCategory(body);
    return res.status(200).json(createdCategory);
    /*const { name } = req.body;
    const newCategory = new Category();
    newCategory.name = name;
    const createdCategory = await categoryService.createCategory(newCategory);
    return res.json(createdCategory);*/
  }

  async updateCategory(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = new Category();
    updatedCategory.name = name;
    const result = await categoryService.updateCategory(parseInt(id), updatedCategory);
    if (!result) {
      return res.status(404).json({ message: 'Category not found' });
    }
    return res.json(result);
  }

  async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    const deletedCategory = await categoryService.deleteCategory(parseInt(id));
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    return res.json(deletedCategory);
  }
}

export default CategoryController;
