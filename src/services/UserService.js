import { ContenedorService } from "./ContenedorMongo";
import User from '../models/User'

export class UserService extends ContenedorService {

    constructor() {
        super(User);
    }

    async getUserByEmail(email) {
        try {
            return await User.findOne({ email });
        } catch (error) {
            console.error('Sucedió un error: ', error);
        }
    }

    async authenticateUser(email, password) {
        console.log('aunthenticating');
        try {
            const user = await User.findOne({ email });
            console.log(user);
            if (!user) {
                return null;
            }

            if (await user.validatePassword(password, user.password)) {
                return user;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Sucedió un error: ', error);
        }
    }

    async createUser(data) {
        try {
            return await this.create(data);
        } catch (error) {
            console.error('Sucedió un error: ', error);
        }
    }
}