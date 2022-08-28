import { Router } from 'express';
import * as ProductController from '../controllers/ProductController';

const router = new Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/new', ProductController.createNewProduct);
router.put('/update/:id', ProductController.updateProduct);
router.delete('/delete/:id', ProductController.deleteProduct);
router.get('/category/:id', ProductController.getProductsByCategory);

export default router;