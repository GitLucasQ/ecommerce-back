import { UserService } from "../services/UserService";
import logger from "../shared/logger";

const userService = new UserService();

export const principal = async (req, res) => {    
    if (req.session.passport) {
        const foundedUser = await userService.getById(req.session.passport.user);
        res.render('index', { data: { name: foundedUser.email } })
    }
    else {
        res.redirect('/login');
    }
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const loginUser = (req, res) => {
    if (req.session.passport) {
        res.redirect('/');
    }
    else {
        res.render('login')
    }
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const failLogin = (req, res) => {
    res.render('faillogin');
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const logoutUser = async (req, res) => {
    if (req.session.passport) {
        const foundedUser = await userService.getById(req.session.passport.user);
        res.render('logout', { data: { name: foundedUser.email } });
        req.session.destroy(() => { })
    }
    else {
        res.redirect('/login');
    }
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const registerUser = async (req, res) => {
    res.render('register');
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};

export const failSignup = (req, res) => {
    res.render('failsignup');
    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};