import { AuthorService } from '../services/AuthorService';

const authorService = new AuthorService();

export const createAuthor = async (req, res) => {
    const { email, firstName, lastName, age, alias, avatar } = req.body;
    const createdAuthor = await authorService.create({ email, firstName, lastName, age, alias, avatar });

    res.status(201).json(createdAuthor);
};

export const getAllAuthors = async (_req, res) => {
    const authors = await authorService.getAllAuthors();

    res.json(authors);
};