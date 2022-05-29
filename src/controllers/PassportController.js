import User from "../models/User";
import { UserService } from "../services/UserService";


const passport = require('passport');
const userService = new UserService();

// PASSPORT IMPLEMENTATION
// passport.use(User.createStrategy());

const usePassport = () => {
    let LocalStrategy = require('passport-local').Strategy;

    passport.use(new LocalStrategy(
        async function (email, password, done) {
            console.log(email);
            const foundedUser = await userService.authenticateUser(email, password);
            if (foundedUser) {
                return done(null, foundedUser);
            } else {
                return done(null, false);
            }
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}


export default usePassport;