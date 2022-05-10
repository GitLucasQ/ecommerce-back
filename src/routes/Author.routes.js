import { Router } from 'express';
import * as AuthorController from '../controllers/AuthorController';

const router = new Router();

router.get('/', AuthorController.getAllAuthors)
router.post('/new', AuthorController.createAuthor);

export default router;