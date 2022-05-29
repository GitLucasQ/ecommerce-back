import { Router } from 'express';
import * as AuthController from '../controllers/AuthController';
import { UserService } from "../services/UserService";


const passport = require('passport');
const userService = new UserService();

let LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    async (email, password, done) => {
        const foundedUser = await userService.authenticateUser(email, password);
        if (foundedUser) {
            return done(null, foundedUser);
        } else {
            return done(null, false);
        }
    }
));

passport.serializeUser((user, done) => {
    console.log('serializeUser');
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    console.log('deserializeUser');
    const foundedUser = userService.getById(id);
    done(null, foundedUser);
});

const router = new Router();

router.post('/signUp', AuthController.signUp);
router.post('/signin', passport.authenticate('local',
    {
        failureRedirect: '/login',
        successRedirect: '/'
    }
));

export default router;