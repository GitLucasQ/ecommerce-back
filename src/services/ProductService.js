import { ContenedorService } from "./ContenedorMongo";
import Product from '../models/Product'
import logger from "../shared/logger";
import { CustomError } from "../shared/CustomError";


let instance = null;
export class ProductService extends ContenedorService {
    constructor() {
        super(Product);
    }

    static getInstance() {
        if (!instance) {
            instance = new ProductService();
        }

        return instance;
    }

    async getAllProducts() {
        try {
            return await this.getAll();
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async getProductById(id) {
        try {
            return await this.getById(id);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async createNewProduct(data) {
        try {
            const createdProduct = await this.create(data);
            return createdProduct?._id;
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async updateProduct(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async deleteProduct(id) {
        try {
            await this.delete(id);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }
}