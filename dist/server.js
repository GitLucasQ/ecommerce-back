"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _Product = _interopRequireDefault(require("./routes/Product.routes"));

var _Author = _interopRequireDefault(require("./routes/Author.routes"));

var _Message = _interopRequireDefault(require("./routes/Message.routes"));

var _Faker = _interopRequireDefault(require("./routes/Faker.routes"));

var _Login = _interopRequireDefault(require("./routes/Login.routes"));

var _Auth = _interopRequireDefault(require("./routes/Auth.routes"));

var _Info = _interopRequireDefault(require("./routes/Info.routes"));

var _Util = _interopRequireDefault(require("./routes/Util.routes"));

require("./dbmongo");

var _config = require("./config");

var _ProductService = require("./services/ProductService");

var _MessageService = require("./services/MessageService");

var _compression = _interopRequireDefault(require("compression"));

var _logger = _interopRequireDefault(require("./shared/logger"));

var _require = require('http'),
    HttpServer = _require.Server;

var _require2 = require('socket.io'),
    IOServer = _require2.Server;

var cookieParser = require('cookie-parser');

var session = require('express-session');

var mongoStore = require('connect-mongo');

var passport = require('passport');

var cluster = require('cluster'); // APP


var app = (0, _express["default"])();

var yargs = require('yargs/yargs')(process.argv.slice(2));

var args = yargs["default"]({
  port: 7070
}).argv;
var PORT = parseInt(process.argv[2]) || 8080; // SOCKET

var httpServer = new HttpServer(app);
var io = new IOServer(httpServer); // USES

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); //app.use(compression());
// COOKIES

app.use(cookieParser());
app.use(session({
  store: mongoStore.create({
    mongoUrl: _config.URL_MONGO_SESSION,
    ttl: 60
  }),
  secret: 'skEtpk2w#54w5e4rwe8',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000 * 10
  }
})); // PASSPORT

require('./controllers/PassportController');

app.use(passport.initialize());
app.use(passport.session()); // ROUTES

app.use('/api/product', _Product["default"]);
app.use('/api/author', _Author["default"]);
app.use('/api/message', _Message["default"]);
app.use('/api/productos-test', _Faker["default"]);
app.use('/api/auth', _Auth["default"]);
app.use('/', _Login["default"]);
app.use('/info', _Info["default"]);
app.use('/api', _Util["default"]);
app.use(function (req, res) {
  res.status(404).json({
    'error': -2,
    'descripcion': 'Ruta no existente'
  });

  _logger["default"].error("Ruta ".concat(req.method, " ").concat(req.url, " no existente"));
}); // SERVER

httpServer.listen(PORT, function () {
  console.log("Server listening on http://localhost:".concat(PORT, " - process ID: ").concat(process.pid, " - ").concat(new Date().toLocaleString()));
});
var productService = new _ProductService.ProductService();
var messageService = new _MessageService.MessageService();
io.on('connection', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(socket) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('Nuevo cliente conectado');
            _context3.t0 = io;
            _context3.next = 4;
            return productService.getAllProducts();

          case 4:
            _context3.t1 = _context3.sent;

            _context3.t0.emit.call(_context3.t0, 'productos', _context3.t1);

            _context3.t2 = io;
            _context3.next = 9;
            return messageService.getChatMessages();

          case 9:
            _context3.t3 = _context3.sent;

            _context3.t2.emit.call(_context3.t2, 'mensajes', _context3.t3);

            socket.on('new-product', /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return productService.createNewProduct(data);

                      case 2:
                        _context.t0 = io;
                        _context.next = 5;
                        return productService.getAllProducts();

                      case 5:
                        _context.t1 = _context.sent;

                        _context.t0.emit.call(_context.t0, 'productos', _context.t1);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            socket.on('new-message', /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return messageService.addMessageChat(data);

                      case 2:
                        _context2.t0 = io;
                        _context2.next = 5;
                        return messageService.getChatMessages();

                      case 5:
                        _context2.t1 = _context2.sent;

                        _context2.t0.emit.call(_context2.t0, 'mensajes', _context2.t1);

                      case 7:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
app.on('error', function (err) {
  _logger["default"].error('error: ', err);

  console.log('Error server,', err);
});