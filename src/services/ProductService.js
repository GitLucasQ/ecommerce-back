import { ContenedorService } from "./ContenedorMongo";
import Product from '../models/Product'
import logger from "../shared/logger";

export class ProductService extends ContenedorService {
    constructor() {
        super(Product);
    }

    async getAllProducts() {
        try {
            return await this.getAll();
        } catch (error) {
            logger.error('Sucedió un errror', error);            
        }
    }

    async getProductById(id) {
        try {
            return await this.getById(id);
        } catch (error) {
            logger.error('Sucedió un errror', error);
        }
    }

    async createNewProduct(data) {
        try {
            const createdProduct = await this.create(data);
            return createdProduct?._id;
        } catch (error) {
            logger.error('Sucedió un error', error);
        }
    }

    async updateProduct(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            logger.error('Sucedió un error', error);
        }
    }

    async deleteProduct(id) {
        try {
            await this.delete(id);
        } catch (error) {
            logger.error('Sucedió un error', error);
        }
    }
}