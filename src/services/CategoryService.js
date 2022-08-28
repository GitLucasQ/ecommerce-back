import { ContenedorService } from "./ContenedorMongo";
import Category from '../models/Category'
import logger from "../shared/logger";
import { CustomError } from "../shared/CustomError";


let instance = null;
export class CategoryService extends ContenedorService {
    constructor() {
        super(Category);
    }

    static getInstance() {
        if (!instance) {
            instance = new CategoryService();
        }

        return instance;
    }

    async getAllCategories() {
        try {
            return await this.getAll();
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async getCategoryById(id) {
        try {
            return await this.getById(id);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async createNewCategory(data) {
        try {
            const createdCategory = await this.create(data);
            return createdCategory?._id;
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async updateCategory(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async deleteCategory(id) {
        try {
            await this.delete(id);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }
}