import { Router } from 'express';
const passport = require('passport');


const router = new Router();


router.post('/signup', passport.authenticate('local-signup',
    {
        successRedirect: '/',
        failureRedirect: '/failregister',
        failureFlash: true
    }
));

router.post('/signin', passport.authenticate('local-signin',
    {
        failureRedirect: '/login',
        successRedirect: '/',
        failureFlash: true
    }
));

export default router;