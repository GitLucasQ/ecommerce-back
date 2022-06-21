import { AuthorService } from '../services/AuthorService';
import logger from '../shared/logger';

const authorService = new AuthorService();

export const createAuthor = async (req, res) => {
    const { email, firstName, lastName, age, alias, avatar } = req.body;
    const createdAuthor = await authorService.create({ email, firstName, lastName, age, alias, avatar });

    res.status(201).json(createdAuthor);
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const getAllAuthors = async (req, res) => {
    const authors = await authorService.getAllAuthors();

    res.json(authors);
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};