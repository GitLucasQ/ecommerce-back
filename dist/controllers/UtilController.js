"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatos = exports.generateRandomNumbers = void 0;

var _logger = _interopRequireDefault(require("../shared/logger"));

var generateRandomNumbers = function generateRandomNumbers(req, res) {
  var _require = require('child_process'),
      fork = _require.fork;

  var cant = req.query.cant === undefined ? 100000000 : req.query.cant;
  /* const forked = fork(__dirname + '/child.js');
    forked.send(cant);
    forked.on('message', (msj) => {
      res.render('randoms', { data: msj });
  });
    forked.on('exit', code => {
      console.log('Exit whit code: ', code);
  }); */

  _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));
};

exports.generateRandomNumbers = generateRandomNumbers;

var getDatos = function getDatos(req, res) {
  res.render('datos', {
    data: {
      puerto: process.argv[2],
      pid: process.pid,
      fecha: new Date().toLocaleString()
    }
  });

  _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));
};

exports.getDatos = getDatos;