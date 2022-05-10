import { ContenedorService } from "./ContenedorMongo";
import Product from '../models/Product'

export class ProductService extends ContenedorService {
    constructor() {
        super(Product);
    }

    async getAllProducts() {
        try {
            return await this.getAll();
        } catch (error) {
            console.error('Sucedió un errror', error);
        }
    }

    async getProductById(id) {
        try {
            return await this.getById(id);
        } catch (error) {
            console.error('Sucedió un errror', error);
        }
    }

    async createNewProduct(data) {
        try {
            const createdProduct = await this.create(data);
            return createdProduct?._id;
        } catch (error) {
            console.error('Sucedió un error', error);
        }
    }

    async updateProduct(id, data) {
        try {
            return await this.update(id, data);
        } catch (error) {
            console.error('Sucedió un error', error);
        }
    }

    async deleteProduct(id) {
        try {
            await this.delete(id);
        } catch (error) {
            console.error('Sucedió un error', error);
        }
    }
}