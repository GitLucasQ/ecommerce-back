import logger from '../shared/logger';


export const generateRandomNumbers = (req, res) => {
    const { fork } = require('child_process');
    const cant = req.query.cant === undefined ? 100000000 : req.query.cant;

    /* const forked = fork(__dirname + '/child.js');

    forked.send(cant);

    forked.on('message', (msj) => {
        res.render('randoms', { data: msj });
    });

    forked.on('exit', code => {
        console.log('Exit whit code: ', code);
    }); */

    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};


export const getDatos = (req, res) => {
    res.render('datos', {
        data:
        {
            puerto: process.argv[2],
            pid: process.pid,
            fecha: new Date().toLocaleString(),
        }
    });

    logger.info(`${req.method} ${req.originalUrl} - ${new Date().toLocaleString()}`);
};