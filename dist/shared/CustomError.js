"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomError = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var CustomError = /*#__PURE__*/(0, _createClass2["default"])(function CustomError(state, message) {
  (0, _classCallCheck2["default"])(this, CustomError);
  this.state = state;
  this.message = message;
});
exports.CustomError = CustomError;