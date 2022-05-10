"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var AuthorSchema = new _mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  age: Number,
  alias: String,
  avatar: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Author', AuthorSchema);

exports["default"] = _default;