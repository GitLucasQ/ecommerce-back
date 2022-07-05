import User from "../models/User";
import { UserService } from "../services/UserService";
import {sendRegisterMail} from '../util/MailNotification';


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
    nameField: 'name',
    addressField: 'address',
    ageField: 'age',
    phoneField: 'phone',
    passReqToCallback: true
}, async (req, email, password, done) => {    
    const { name, address, age, phone } = req.body;    
    const { filename } = req.file;
    const foundedUser = await userService.getUserByEmail(email);
    if (foundedUser) {
        return done(null, false);
    } else {
        const createdUser = new User();
        createdUser.email = email;
        createdUser.password = await createdUser.encryptPassword(password);
        createdUser.name = name;
        createdUser.address = address;
        createdUser.age = age;
        createdUser.phone = phone;
        createdUser.image = filename.split('/')[1];
        await createdUser.save();

        await sendRegisterMail(createdUser);

        return done(null, createdUser);
    }
}));