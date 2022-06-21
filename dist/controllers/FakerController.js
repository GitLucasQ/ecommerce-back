"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateProducts = void 0;

var _faker = require("@faker-js/faker");

var _logger = _interopRequireDefault(require("../shared/logger"));

var commerce = _faker.faker.commerce,
    image = _faker.faker.image;

var generateProducts = function generateProducts(req, res) {
  var fakeProduct = [];

  for (var index = 0; index < 5; index++) {
    var name = commerce.product();
    var price = commerce.price(10, 500, 0, '$');
    var photo = image.imageUrl(640, 240, 'technology', true);
    fakeProduct.push({
      name: name,
      price: price,
      photo: photo
    });
  }

  res.json(fakeProduct);

  _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));
};

exports.generateProducts = generateProducts;