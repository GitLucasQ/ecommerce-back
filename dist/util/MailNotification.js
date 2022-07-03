"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRegisterMail = exports.sendMailConfirmShop = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = require("nodemailer");

var _config = require("../config");

var _logger = _interopRequireDefault(require("../shared/logger"));

var transporter = (0, _nodemailer.createTransport)({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: _config.MAIL_ACCOUNT,
    pass: _config.MAIL_PASSWORD
  }
});

var sendRegisterMail = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userData) {
    var mailOptions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mailOptions = {
              from: 'Ecommerce notificaciones',
              to: _config.MAIL_ACCOUNT,
              subject: "Nuevo registro de usuario - ".concat(userData.name),
              html: "\n            <style>\n                #tabla {\n                font-family: Arial, Helvetica, sans-serif;\n                border-collapse: collapse;\n                width: 100%;\n                }\n\n                #tabla td, #tabla th {\n                border: 1px solid #ddd;\n                padding: 8px;\n                }\n\n                #tabla tr:nth-child(even){background-color: #f2f2f2;}\n\n                #tabla tr:hover {background-color: #ddd;}\n\n                #tabla th {\n                padding-top: 12px;\n                padding-bottom: 12px;\n                text-align: left;\n                background-color: #04AA6D;\n                color: white;\n                }\n            </style>\n\n            <h1>Nuevo usuario registrado</h1>\n                <table id=\"tabla\">\n                    <thead>\n                        <tr>\n                            <th>Nombre</th>\n                            <th>Email</th>\n                            <th>Direcci\xF3n</th>\n                            <th>Edad</th>\n                            <th>Tel\xE9fono</th>\n                            <th>Fecha</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>".concat(userData.name, "</td>\n                            <td>").concat(userData.email, "</td>\n                            <td>").concat(userData.address, "</td>\n                            <td>").concat(userData.age, "</td>\n                            <td>").concat(userData.phone, "</td>\n                            <td>").concat(userData.createdAt, "</td>\n                        </tr>\n                    </tbody>\n                </table>")
            };
            _context.prev = 1;
            _context.next = 4;
            return transporter.sendMail(mailOptions);

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);

            _logger["default"].error('Sucedió un error:', _context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));

  return function sendRegisterMail(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.sendRegisterMail = sendRegisterMail;

var sendMailConfirmShop = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(cartData, userData) {
    var productData, mailOptions;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            productData = function productData() {
              var data = "";
              cartData.products.forEach(function (product) {
                data += "<tr>\n                        <td>".concat(product.name, "</td>\n                        <td>").concat(product.quantity, "</td>\n                        <td>$").concat(product.price, "</td>\n                        <td>$").concat(Number(product.quantity) * Number(product.price), "</td>\n                    </tr>");
              });
              return data;
            };

            mailOptions = {
              from: 'Ecommerce Notificaciones',
              to: _config.MAIL_ACCOUNT,
              subject: "Nuevo pedido de ".concat(userData.name, " <").concat(userData.email, ">"),
              html: "\n            <style>\n                #tabla {\n                font-family: Arial, Helvetica, sans-serif;\n                border-collapse: collapse;\n                width: 100%;\n                }\n\n                #tabla td, #tabla th {\n                border: 1px solid #ddd;\n                padding: 8px;\n                }\n\n                #tabla tr:nth-child(even){background-color: #f2f2f2;}\n\n                #tabla tr:hover {background-color: #ddd;}\n\n                #tabla th {\n                padding-top: 12px;\n                padding-bottom: 12px;\n                text-align: left;\n                background-color: #04AA6D;\n                color: white;\n                }\n            </style>\n            <h1>Se ha registrado un nuevo pedido:</h1>\n            <table id=\"tabla\">\n                    <thead>\n                        <tr>\n                            <th>Producto</th>\n                            <th>Cantidad</th>\n                            <th>Precio Unitario</th>\n                            <th>Total</th>                            \n                        </tr>\n                    </thead>\n                    <tbody>\n                        ".concat(productData(), "\n                    </tbody>\n                </table>\n        ")
            };
            _context2.prev = 2;
            _context2.next = 5;
            return transporter.sendMail(mailOptions);

          case 5:
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](2);

            _logger["default"].error('Sucedió un error:', _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 7]]);
  }));

  return function sendMailConfirmShop(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.sendMailConfirmShop = sendMailConfirmShop;