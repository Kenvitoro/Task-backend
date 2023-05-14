"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const CategoryRouter = (0, express_1.Router)();
const categoryController = new category_controller_1.CategoryController();
CategoryRouter.get('/', categoryController.getAllCategories);
CategoryRouter.get('/:id', categoryController.getCategoryById);
CategoryRouter.post('/', categoryController.createCategory);
CategoryRouter.put('/:id', categoryController.updateCategory);
CategoryRouter.delete('/:id', categoryController.deleteCategory);
exports.default = CategoryRouter;
//# sourceMappingURL=Category.routes.js.map