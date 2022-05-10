"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var MessageSchema = new _mongoose.Schema({
  author: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }],
  text: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Message', MessageSchema);

exports["default"] = _default;