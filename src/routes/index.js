import { Router } from 'express';
import utilRoutes from './Util.routes';
import infoRoutes from './Info.routes';
import productRoutes from './Product.routes';
import authorRoutes from './Author.routes';
import messageRoutes from './Message.routes';
import fakerRoutes from './Faker.routes';
import authRoutes from './Auth.routes';
import loginRoutes from './Login.routes';
import cartRoutes from './Cart.routes';
import categoryRoutes from './Category.routes';

const routes = Router();

routes.use('/api', utilRoutes);
routes.use('/info', infoRoutes);
routes.use('/api/product', productRoutes);
routes.use('/api/author', authorRoutes);
routes.use('/api/message', messageRoutes);
routes.use('/api/productos-test', fakerRoutes);
routes.use('/api/auth', authRoutes);
routes.use('/', loginRoutes);
routes.use('/api/cart', cartRoutes);
routes.use('/api/category', categoryRoutes);


export default routes;