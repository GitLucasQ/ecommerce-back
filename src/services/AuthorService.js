import { ContenedorService } from "./ContenedorMongo";
import Author from '../models/Author';
import logger from "../shared/logger";
import { CustomError } from "../shared/CustomError";

let instance = null;
export class AuthorService extends ContenedorService {

    constructor() {
        super(Author);
    }

    static getInstance() {
        if (!instance) {
            instance = new AuthorService();
        }

        return instance;
    }

    async getAllAuthors() {
        try {
            return await this.getAll();
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async createAuthor(data) {
        try {
            return await this.create(data);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async getAuthorByEmail(email) {
        try {
            return await this.model.findOne({ email });
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }
}