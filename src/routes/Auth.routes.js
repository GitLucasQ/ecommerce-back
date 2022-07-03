import { Router } from 'express';
// import { UploadFile } from '../middlewares/uploadFile';
const passport = require('passport');

const router = new Router();

// CONFIG MULTER
const multer = require('multer');
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        const filename = file.originalname.split('.')[0];
        cb(null, `images/${filename}-${Date.now()}.${ext}`);
    }
});
const multerFilter = (req, file, cb) => {
    if (['png', 'jpeg', 'jpg'].includes(file.mimetype.split('/')[1])) {
        cb(null, true);
    }
    else {
        cb(new Error('No es una imagen'), false);
    }
}
// const upload = multer({ dest: './src/public/images' });
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

router.post('/signup', upload.single('photo'), passport.authenticate('local-signup',
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