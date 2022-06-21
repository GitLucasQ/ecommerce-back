"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChatMessages = exports.getAllMessages = exports.createNewMessage = exports.addMessageChat = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _AuthorService = require("../services/AuthorService");

var _MessageService = require("../services/MessageService");

var _logger = _interopRequireDefault(require("../shared/logger"));

var messageService = new _MessageService.MessageService();
var authorService = new _AuthorService.AuthorService();

var getAllMessages = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var messages;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return messageService.getAllMessages();

          case 2:
            messages = _context.sent;
            res.json(messages);

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllMessages(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllMessages = getAllMessages;

var createNewMessage = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, author, text, createdMessage;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, author = _req$body.author, text = _req$body.text;
            _context2.next = 3;
            return messageService.createMessage({
              author: author,
              text: text
            });

          case 3:
            createdMessage = _context2.sent;
            res.status(201).json(createdMessage);

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createNewMessage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createNewMessage = createNewMessage;

var getChatMessages = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var chat;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return messageService.getChatMessages();

          case 2:
            chat = _context3.sent;
            res.status(200).json(chat);

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getChatMessages(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getChatMessages = getChatMessages;

var addMessageChat = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, email, text, foundedAuthor;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, text = _req$body2.text;
            email = email.trim();
            _context4.next = 4;
            return authorService.getAuthorByEmail(email);

          case 4:
            foundedAuthor = _context4.sent;

            if (!(foundedAuthor != null)) {
              _context4.next = 8;
              break;
            }

            _context4.next = 8;
            return createMessage({
              author: foundedAuthor._id,
              text: text
            });

          case 8:
            res.status(200).json('Mensaje enviado con éxito');

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function addMessageChat(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.addMessageChat = addMessageChat;