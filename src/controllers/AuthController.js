import User from "../models/User";
import { UserService } from "../services/UserService";


const passport = require('passport');
const userService = new UserService();

// PASSPORT IMPLEMENTATION
// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

let LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    async function (email, passport, done) {
        console.log(email);
        const foundedUser = await userService.authenticateUser(email, passport);
        if (foundedUser) {
            return done(null, foundedUser);
        } else {
            return done(null, false);
        }
    }
));



export const signUp = async (req, res) => {
    const { email, password } = req.body;
    const foundedUser = await userService.getUserByEmail(email);

    if (foundedUser) {
        res.status(500).json('El usuario ya está registrado');
    } else {
        const createdUser = await userService.createUser({
            email,
            password: await User.encryptPassword(password)
        });

        res.status(200).json(createdUser);
    }

};

export const signIn = (_req, res) => {    
    passport.authenticate('local', { failureRedirect: '/login' }, (err, user, info) => {
        console.log(user);
        if (err) {
            return res.status(500).json(err);
        }
        if (!user) {
            return res.status(401).json(info);
        }

        res.redirect('/');
    });
}