"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmShop = exports.addNewProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _CartService = require("../services/CartService");

var _ProductService = require("../services/ProductService");

var _UserService = require("../services/UserService");

var _logger = _interopRequireDefault(require("../shared/logger"));

var _MailNotification = require("../util/MailNotification");

var _PhoneNotification = require("../util/PhoneNotification");

var cartService = _CartService.CartService.getInstance();

var productService = _ProductService.ProductService.getInstance();

var userService = _UserService.UserService.getInstance();

var addNewProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, productId, quantity, user, foundedProduct, foundedCart, indexProduct, productCart, createdCart;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, productId = _req$body.productId, quantity = _req$body.quantity, user = _req$body.user; // const user = req.session.passport.use;

            _context.next = 3;
            return productService.getProductById(productId);

          case 3:
            foundedProduct = _context.sent;
            _context.next = 6;
            return cartService.findCart(user);

          case 6:
            foundedCart = _context.sent;

            if (!foundedCart) {
              _context.next = 15;
              break;
            }

            indexProduct = foundedCart.products.findIndex(function (product) {
              return product.productId.toString() === productId;
            });

            if (indexProduct > -1) {
              productCart = foundedCart.products[indexProduct];
              productCart.quantity = quantity;
              foundedCart.products[indexProduct] = productCart;
            } else {
              foundedCart.products.push({
                productId: productId,
                name: foundedProduct.name,
                quantity: quantity,
                price: foundedProduct.price
              });
            }

            _context.next = 12;
            return foundedCart.save();

          case 12:
            res.status(201).json(foundedCart);
            _context.next = 19;
            break;

          case 15:
            _context.next = 17;
            return cartService.createNewCart({
              user: user,
              products: [{
                productId: productId,
                name: foundedProduct.name,
                quantity: quantity,
                price: foundedProduct.price
              }]
            });

          case 17:
            createdCart = _context.sent;
            res.status(201).json(createdCart);

          case 19:
            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addNewProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addNewProduct = addNewProduct;

var confirmShop = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var idcart, foundedCart, foundedUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idcart = req.body.idcart;
            _context2.next = 3;
            return cartService.getById(idcart);

          case 3:
            foundedCart = _context2.sent;
            _context2.next = 6;
            return userService.getById(foundedCart.user.toString());

          case 6:
            foundedUser = _context2.sent;
            _context2.next = 9;
            return (0, _MailNotification.sendMailConfirmShop)(foundedCart, foundedUser);

          case 9:
            _context2.next = 11;
            return (0, _PhoneNotification.sendSMSNotificationToUser)(foundedUser.name, foundedUser.phone);

          case 11:
            _context2.next = 13;
            return (0, _PhoneNotification.sendMessageToAdmin)(foundedUser);

          case 13:
            res.status(200).json({
              message: "Compra realizada con éxito",
              data: foundedCart
            });

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function confirmShop(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.confirmShop = confirmShop;