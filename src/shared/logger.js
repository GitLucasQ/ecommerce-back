const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({ level: 'verbose' }),
        new winston.transports.File({ filename: 'warn.log', level: 'warning' }),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
});


export default logger;