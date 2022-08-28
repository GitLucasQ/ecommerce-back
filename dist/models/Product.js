"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ProductSchema = new _mongoose.Schema({
  name: String,
  price: Number,
  photo: String,
  category: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Product', ProductSchema);

exports["default"] = _default;