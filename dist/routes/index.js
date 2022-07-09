"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Util = _interopRequireDefault(require("./Util.routes"));

var _Info = _interopRequireDefault(require("./Info.routes"));

var _Product = _interopRequireDefault(require("./Product.routes"));

var _Author = _interopRequireDefault(require("./Author.routes"));

var _Message = _interopRequireDefault(require("./Message.routes"));

var _Faker = _interopRequireDefault(require("./Faker.routes"));

var _Auth = _interopRequireDefault(require("./Auth.routes"));

var _Login = _interopRequireDefault(require("./Login.routes"));

var _Cart = _interopRequireDefault(require("./Cart.routes"));

var routes = (0, _express.Router)();
routes.use('/api', _Util["default"]);
routes.use('/info', _Info["default"]);
routes.use('/api/product', _Product["default"]);
routes.use('/api/author', _Author["default"]);
routes.use('/api/message', _Message["default"]);
routes.use('/api/productos-test', _Faker["default"]);
routes.use('/api/auth', _Auth["default"]);
routes.use('/', _Login["default"]);
routes.use('/api/cart', _Cart["default"]);
var _default = routes;
exports["default"] = _default;