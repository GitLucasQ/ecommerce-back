

export const UploadFile = (req, res, next) => {
    try {
        console.log('entra aqui');
        const multer = require('multer');
        multer({
            dest: './src/public/images',
            // fileFilter: (req, file, cb) => {
            //     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
            //         cb(null, true);
            //         next();
            //     }
            //     else {
            //         cb(new multer.MulterError('No es un arvhivo tipo imagen'));
            //         res.render('/failregister')
            //     }
            // }
        }).single('photo');
        next()
    }
    catch (error) {
        console.log(error);
    }

};
