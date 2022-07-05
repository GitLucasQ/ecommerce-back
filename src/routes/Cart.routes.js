import { Router } from 'express';
import * as CartController from '../controllers/CartController';
import { verifyLogged } from '../middlewares';


const router = new Router();


router.post('/addproduct', CartController.addNewProduct);
router.post('/confirmshop', CartController.confirmShop);

export default router;