import { UserService } from "../services/UserService";

const userService = new UserService();

export const principal = async (req, res) => {
    if (req.session.passport) {
        const foundedUser = await userService.getById(req.session.passport.user);
        res.render('index', { data: { name: foundedUser.email } })
    }
    else {
        res.redirect('/login');
    }
};

export const loginUser = (req, res) => {
    if (req.session.passport) {
        res.redirect('/');
    }
    else {
        res.render('login')
    }
};

export const failLogin = (_req, res) => {
    res.render('faillogin');
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
};

export const registerUser = async (req, res) => {
    res.render('register');
};

export const failSignup = (_req, res) => {
    res.render('failsignup');
};