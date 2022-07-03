import { Router } from 'express';
import * as CartController from '../controllers/CartController';
import { verifyLogged } from '../middlewares';


const router = new Router();


router.post('/addproduct', CartController.addNewProduct);

export default router;