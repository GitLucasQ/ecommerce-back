import { ContenedorService } from "./ContenedorMongo";
import Cart from '../models/Cart';
import logger from "../shared/logger";

export class CartService extends ContenedorService {

    constructor() {
        super(Cart);
    }

    async findCart(user) {
        try {
            return await Cart.findOne({ user });
        } catch (error) {
            logger.error('Sucedió un error', error);
        }
    }

    async createNewCart(data) {
        try {
            return await this.create(data);
        } catch (error) {
            logger.error('Sucedió un error', error);
        }
    }
}