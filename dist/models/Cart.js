"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var CartSchema = new _mongoose.Schema({
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  products: [{
    productId: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: "Product"
    },
    name: String,
    quantity: Number,
    price: Number
  }],
  modified: {
    type: Date,
    "default": Date.now
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Cart', CartSchema);

exports["default"] = _default;