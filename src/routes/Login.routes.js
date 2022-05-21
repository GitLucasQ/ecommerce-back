import { Router } from 'express';
import * as loginController from '../controllers/LoginController'

const router = new Router();

router.post('/', loginController.loginUser);

export default router;