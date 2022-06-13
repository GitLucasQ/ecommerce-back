"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatos = exports.generateRandomNumbers = void 0;

var generateRandomNumbers = function generateRandomNumbers(req, res) {
  var _require = require('child_process'),
      fork = _require.fork;

  var cant = req.query.cant === undefined ? 100000000 : req.query.cant;
  var forked = fork(__dirname + '/child.js');
  forked.send(cant);
  forked.on('message', function (msj) {
    res.render('randoms', {
      data: msj
    });
  });
  forked.on('exit', function (code) {
    console.log('Exit whit code: ', code);
  });
};

exports.generateRandomNumbers = generateRandomNumbers;

var getDatos = function getDatos(_req, res) {
  res.render('datos', {
    data: {
      puerto: process.argv[2],
      pid: process.pid,
      fecha: new Date().toLocaleString()
    }
  });
};

exports.getDatos = getDatos;