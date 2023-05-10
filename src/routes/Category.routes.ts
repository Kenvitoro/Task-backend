import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller';

const CategoryRouter = Router();

const categoryController = new CategoryController();

CategoryRouter.get('/', categoryController.getAllCategories);
CategoryRouter.get('/:id', categoryController.getCategoryById);
CategoryRouter.post('/', categoryController.createCategory);
CategoryRouter.put('/:id', categoryController.updateCategory);
CategoryRouter.delete('/:id', categoryController.deleteCategory);

export default CategoryRouter;
