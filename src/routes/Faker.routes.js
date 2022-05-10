import { Router } from 'express';
import { generateProducts } from '../controllers/FakerController';

const routes = new Router();

routes.get('/', generateProducts);

export default routes;