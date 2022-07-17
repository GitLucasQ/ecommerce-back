import { ContenedorService } from "./ContenedorMongo";
import Message from '../models/Message';
import { AuthorService } from "./AuthorService";
import { ANONYMOUS_AVATAR } from '../config';
import logger from "../shared/logger";
import { CustomError } from "../shared/CustomError";


let instance = null;
export class MessageService extends ContenedorService {

    constructor() {
        super(Message);
    }

    static getInstance() {
        if (!instance) {
            instance = new MessageService();
        }

        return instance;
    }

    async getAllMessages() {
        try {
            return await this.getAll();
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async getMessageById(id) {
        try {
            return await this.getById(id);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async createMessage(data) {
        try {
            return await this.create(data);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async getChatMessages() {
        try {
            return await this.getAll().populate('author');
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async addMessageChat(data) {
        try {
            const authorService = new AuthorService();
            const email = data.email.trim();
            const foundedAuthor = await authorService.getAuthorByEmail(email);

            if (foundedAuthor != null) {
                return await this.createMessage({ author: foundedAuthor._id, text: data.text });
            }
            else {
                const anonymousAuthor = await authorService.createAuthor({
                    email: data.email,
                    avatar: ANONYMOUS_AVATAR
                });
                return await this.createMessage({ author: anonymousAuthor._id, text: data.text });
            }
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }
}