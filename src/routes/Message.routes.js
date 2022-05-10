import {Router} from 'express';
import * as messageController from '../controllers/MessageController';

const route = new Router();

route.get('/', messageController.getAllMessages);
route.post('/populate', messageController.createNewMessage);
route.get('/chat', messageController.getChatMessages);
route.post('/new', messageController.addMessageChat);

export default route;