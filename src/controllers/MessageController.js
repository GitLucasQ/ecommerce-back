import { AuthorService } from '../services/AuthorService';
import { MessageService } from '../services/MessageService';

const messageService = new MessageService();
const authorService = new AuthorService();

export const getAllMessages = async (_req, res) => {
    const messages = await messageService.getAllMessages();

    res.json(messages);
};

export const createNewMessage = async (req, res) => {
    const { author, text } = req.body;
    const createdMessage = await messageService.createMessage({ author, text });

    res.status(201).json(createdMessage);
};

export const getChatMessages = async (_req, res) => {
    const chat = await messageService.getChatMessages();

    res.status(200).json(chat);
};

export const addMessageChat = async (req, res) => {
    let { email, text } = req.body;
    email = email.trim();

    const foundedAuthor = await authorService.getAuthorByEmail(email);

    if (foundedAuthor != null) {
        await createMessage({ author: foundedAuthor._id, text });
    }

    res.status(200).json('Mensaje enviado con éxito');
}