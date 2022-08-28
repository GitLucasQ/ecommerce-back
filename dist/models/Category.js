"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var CategorySchema = new _mongoose.Schema({
  name: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Category', CategorySchema);

exports["default"] = _default;