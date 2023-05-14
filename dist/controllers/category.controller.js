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
exports.CategoryController = void 0;
const Category_entity_1 = require("../entities/Category.entity");
const category_service_1 = __importDefault(require("../services/category.service"));
const categoryService = new category_service_1.default();
class CategoryController {
    getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield categoryService.getAllCategories();
            return res.json(categories);
        });
    }
    getCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const category = yield categoryService.getCategoryById(parseInt(id));
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            return res.json(category);
        });
    }
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const createdCategory = yield categoryService.createCategory(body);
            return res.status(200).json(createdCategory);
            /*const { name } = req.body;
            const newCategory = new Category();
            newCategory.name = name;
            const createdCategory = await categoryService.createCategory(newCategory);
            return res.json(createdCategory);*/
        });
    }
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name } = req.body;
            const updatedCategory = new Category_entity_1.Category();
            updatedCategory.name = name;
            const result = yield categoryService.updateCategory(parseInt(id), updatedCategory);
            if (!result) {
                return res.status(404).json({ message: 'Category not found' });
            }
            return res.json(result);
        });
    }
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deletedCategory = yield categoryService.deleteCategory(parseInt(id));
            if (!deletedCategory) {
                return res.status(404).json({ message: 'Category not found' });
            }
            return res.json(deletedCategory);
        });
    }
}
exports.CategoryController = CategoryController;
exports.default = CategoryController;
//# sourceMappingURL=category.controller.js.map