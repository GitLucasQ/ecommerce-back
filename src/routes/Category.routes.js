import { Router } from 'express';
import * as CategoryController from '../controllers/CategoryController';

const router = new Router();

router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);
router.post('/new', CategoryController.createNewCategory);
router.put('/update/:id', CategoryController.updateCategory);
router.delete('/delete/:id', CategoryController.deleteCategory);

export default router;