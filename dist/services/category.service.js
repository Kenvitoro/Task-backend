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
const database_1 = __importDefault(require("../config/database"));
const Category_entity_1 = require("../entities/Category.entity");
class CategoryService {
    constructor() {
        this.categoryRepository = database_1.default.getRepository(Category_entity_1.Category);
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield this.categoryRepository.find();
            return categories;
        });
    }
    getCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield this.categoryRepository.findOneBy({ id: id });
            return category;
        });
    }
    createCategory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = this.categoryRepository.create(data);
            yield this.categoryRepository.save(task);
            return task;
            /*const createdCategory = await this.categoryRepository.save(newCategory);
            return createdCategory;*/
        });
    }
    updateCategory(id, updatedCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryToUpdate = yield this.getCategoryById(id);
            if (!categoryToUpdate) {
                return null;
            }
            const mergedCategory = this.categoryRepository.merge(categoryToUpdate, updatedCategory);
            const result = yield this.categoryRepository.save(mergedCategory);
            return result;
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryToDelete = yield this.getCategoryById(id);
            if (!categoryToDelete) {
                return null;
            }
            yield this.categoryRepository.remove(categoryToDelete);
            return categoryToDelete;
        });
    }
}
exports.default = CategoryService;
//# sourceMappingURL=category.service.js.map