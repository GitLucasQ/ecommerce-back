import User from "../models/User";
import { UserService } from "../services/UserService";


const passport = require('passport');
const userService = new UserService();
const LocalStrategy = require('passport-local').Strategy;


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const foundedUser = await User.findById(id);
    done(null, foundedUser);
});


passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const foundedUser = await userService.authenticateUser(email, password);
    if (foundedUser) {
        return done(null, foundedUser);
    } else {
        return done(null, false);
    }
}));


passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const foundedUser = await userService.getUserByEmail(email);
    if (foundedUser) {
        return done(null, false);
    } else {
        const createdUser = new User();
        createdUser.email = email;
        createdUser.password = await createdUser.encryptPassword(password);
        await createdUser.save();

        return done(null, createdUser);
    }
}));