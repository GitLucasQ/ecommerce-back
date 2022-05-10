import { ContenedorService } from "./ContenedorMongo";
import Author from '../models/Author';

export class AuthorService extends ContenedorService {

    constructor() {
        super(Author);
    }

    async getAllAuthors() {
        try {
            return await this.getAll();
        } catch (error) {
            console.error('Sucedió un errror', error);
        }
    }

    async createAuthor(data) {
        try {
            return await this.create(data);
        } catch (error) {
            console.error('Sucedió un error: ', error);
        }
    }

    async getAuthorByEmail(email) {
        try {
            return await this.model.findOne({ email });
        } catch (error) {
            console.error('Sucedió un error: ', error);
        }
    }
}