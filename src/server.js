import express from 'express';
import productRoutes from './routes/Product.routes';
import authorRoutes from './routes/Author.routes';
import messageRoutes from './routes/Message.routes';
import fakerRoutes from './routes/Faker.routes';
import loginRoutes from './routes/Login.routes';
import authRoutes from './routes/Auth.routes';
import infoRoutes from './routes/Info.routes';
import utilRoutes from './routes/Util.routes';
import './dbmongo'
import { URL_MONGO_SESSION } from './config'
import { ProductService } from './services/ProductService';
import { MessageService } from './services/MessageService';
import compression from 'compression';
import logger from './shared/logger';
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const passport = require('passport');
const cluster = require('cluster');


// APP
const app = express();
const yargs = require('yargs/yargs')(process.argv.slice(2));
const args = yargs.default({ port: 7070 }).argv;
const PORT = parseInt(process.argv[2]) || process.env.PORT;

// SOCKET
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// USES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//app.use(compression());


// COOKIES
app.use(cookieParser());
app.use(session({
    store: mongoStore.create({ mongoUrl: URL_MONGO_SESSION, ttl: 60 }),
    secret: 'skEtpk2w#54w5e4rwe8',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 10
    }
}));

// PASSPORT
require('./controllers/PassportController');
app.use(passport.initialize());
app.use(passport.session());


// ROUTES
app.use('/api/product', productRoutes);
app.use('/api/author', authorRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/productos-test', fakerRoutes);
app.use('/api/auth', authRoutes);
app.use('/', loginRoutes);
app.use('/info', infoRoutes);
app.use('/api', utilRoutes);
app.use((req, res) => {
    res.status(404).json({
        'error': -2,
        'descripcion': 'Ruta no existente'
    })
    logger.error(`Ruta ${req.method} ${req.url} no existente`);
});

// SERVER
httpServer.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT} - process ID: ${process.pid} - ${new Date().toLocaleString()}`);
})

const productService = new ProductService();
const messageService = new MessageService();


io.on('connection', async (socket) => {
    console.log('Nuevo cliente conectado');
    io.emit('productos', await productService.getAllProducts());
    io.emit('mensajes', await messageService.getChatMessages());

    socket.on('new-product', async (data) => {
        await productService.createNewProduct(data);
        io.emit('productos', await productService.getAllProducts());
    });

    socket.on('new-message', async (data) => {
        await messageService.addMessageChat(data);
        io.emit('mensajes', await messageService.getChatMessages());
    });
});

app.on('error', (err) => {
    logger.error('error: ', err);
    console.log('Error server,', err);
});