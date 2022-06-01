import { Router } from 'express';
import * as loginController from '../controllers/LoginController'

const router = new Router();

router.get('/', loginController.principal);
router.get('/login', loginController.loginUser);
router.get('/faillogin', loginController.failLogin);
router.get('/logout', loginController.logoutUser);
router.get('/register', loginController.registerUser);
router.get('/failregister', loginController.failSignup);

export default router;