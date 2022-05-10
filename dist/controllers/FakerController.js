"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateProducts = void 0;

var _faker = require("@faker-js/faker");

var commerce = _faker.faker.commerce,
    image = _faker.faker.image;

var generateProducts = function generateProducts(_req, res) {
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
};

exports.generateProducts = generateProducts;