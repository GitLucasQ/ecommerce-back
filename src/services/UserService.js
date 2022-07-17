import { ContenedorService } from "./ContenedorMongo";
import User from '../models/User'
import logger from "../shared/logger";
import { CustomError } from "../shared/CustomError";


let instance = null;
export class UserService extends ContenedorService {

    constructor() {
        super(User);
    }

    static getInstance() {
        if (!instance) {
            instance = new UserService();
        }

        return instance;
    }

    async getUserByEmail(email) {
        try {
            return await User.findOne({ email });
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async authenticateUser(email, password) {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                return null;
            }

            if (await user.validatePassword(password, user.password)) {
                return user;
            } else {
                return null;
            }
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }

    async createUser(data) {
        try {
            return await this.create(data);
        } catch (error) {
            logger.error(new CustomError(500, error));
        }
    }
}