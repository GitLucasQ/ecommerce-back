"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSMSNotificationToUser = exports.sendMessageToAdmin = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _twilio = _interopRequireDefault(require("twilio"));

var _config = require("../config");

var _logger = _interopRequireDefault(require("../shared/logger"));

var client = (0, _twilio["default"])(_config.TWILIO_ID, _config.TWILIO_TOKEN);

var sendSMSNotificationToUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(nameUser, phoneUser) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return client.messages.create({
              body: "Hola ".concat(nameUser.split(' ')[0], "! Tu pedido ha sido recibido y se est\xE1 procesando"),
              from: _config.TWILIO_NUMBER,
              to: phoneUser
            });

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);

            _logger["default"].error('Sucedió un error:', _context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function sendSMSNotificationToUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.sendSMSNotificationToUser = sendSMSNotificationToUser;

var sendMessageToAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userData) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return client.messages.create({
              body: "Nuevo pedido de ".concat(userData.name, " <").concat(userData.email, ">"),
              from: "whatsapp:".concat(_config.TWILIO_WSP_NUMBER),
              to: "whatsapp:".concat(_config.ADMIN_PHONE)
            });

          case 3:
            _context2.next = 8;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);

            _logger["default"].error('Sucedió un error:', _context2.t0);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 5]]);
  }));

  return function sendMessageToAdmin(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.sendMessageToAdmin = sendMessageToAdmin;