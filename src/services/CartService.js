import { ContenedorService } from "./ContenedorMongo";
import Cart from '../models/Cart';
import logger from "../shared/logger";
import { CustomError } from "../shared/CustomError";

let instance = null;

export class CartService extends ContenedorService {

    constructor() {
        super(Cart);
    }

    static getInstance() {
        if (!instance) {
            instance = new CartService();
        }

        return instance;
    }

    async findCart(user) {
        try {
            return await Cart.findOne({ user });
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async createNewCart(data) {
        try {
            return await this.create(data);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }
}