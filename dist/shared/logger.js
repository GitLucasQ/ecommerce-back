"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var winston = require('winston');

var logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console({
    level: 'verbose'
  }), new winston.transports.File({
    filename: 'warn.log',
    level: 'warning'
  }), new winston.transports.File({
    filename: 'error.log',
    level: 'error'
  })]
});
var _default = logger;
exports["default"] = _default;