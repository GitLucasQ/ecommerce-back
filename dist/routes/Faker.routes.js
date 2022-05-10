"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _FakerController = require("../controllers/FakerController");

var routes = new _express.Router();
routes.get('/', _FakerController.generateProducts);
var _default = routes;
exports["default"] = _default;