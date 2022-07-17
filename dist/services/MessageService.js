"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ContenedorMongo = require("./ContenedorMongo");

var _Message = _interopRequireDefault(require("../models/Message"));

var _AuthorService = require("./AuthorService");

var _config = require("../config");

var _logger = _interopRequireDefault(require("../shared/logger"));

var _CustomError = require("../shared/CustomError");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var instance = null;

var MessageService = /*#__PURE__*/function (_ContenedorService) {
  (0, _inherits2["default"])(MessageService, _ContenedorService);

  var _super = _createSuper(MessageService);

  function MessageService() {
    (0, _classCallCheck2["default"])(this, MessageService);
    return _super.call(this, _Message["default"]);
  }

  (0, _createClass2["default"])(MessageService, [{
    key: "getAllMessages",
    value: function () {
      var _getAllMessages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.getAll();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);

                _logger["default"].error(new _CustomError.CustomError(500, _context.t0));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function getAllMessages() {
        return _getAllMessages.apply(this, arguments);
      }

      return getAllMessages;
    }()
  }, {
    key: "getMessageById",
    value: function () {
      var _getMessageById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.getById(id);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);

                _logger["default"].error(new _CustomError.CustomError(500, _context2.t0));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 6]]);
      }));

      function getMessageById(_x) {
        return _getMessageById.apply(this, arguments);
      }

      return getMessageById;
    }()
  }, {
    key: "createMessage",
    value: function () {
      var _createMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.create(data);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);

                _logger["default"].error(new _CustomError.CustomError(500, _context3.t0));

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function createMessage(_x2) {
        return _createMessage.apply(this, arguments);
      }

      return createMessage;
    }()
  }, {
    key: "getChatMessages",
    value: function () {
      var _getChatMessages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.getAll().populate('author');

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);

                _logger["default"].error(new _CustomError.CustomError(500, _context4.t0));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 6]]);
      }));

      function getChatMessages() {
        return _getChatMessages.apply(this, arguments);
      }

      return getChatMessages;
    }()
  }, {
    key: "addMessageChat",
    value: function () {
      var _addMessageChat = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
        var authorService, email, foundedAuthor, anonymousAuthor;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                authorService = new _AuthorService.AuthorService();
                email = data.email.trim();
                _context5.next = 5;
                return authorService.getAuthorByEmail(email);

              case 5:
                foundedAuthor = _context5.sent;

                if (!(foundedAuthor != null)) {
                  _context5.next = 12;
                  break;
                }

                _context5.next = 9;
                return this.createMessage({
                  author: foundedAuthor._id,
                  text: data.text
                });

              case 9:
                return _context5.abrupt("return", _context5.sent);

              case 12:
                _context5.next = 14;
                return authorService.createAuthor({
                  email: data.email,
                  avatar: _config.ANONYMOUS_AVATAR
                });

              case 14:
                anonymousAuthor = _context5.sent;
                _context5.next = 17;
                return this.createMessage({
                  author: anonymousAuthor._id,
                  text: data.text
                });

              case 17:
                return _context5.abrupt("return", _context5.sent);

              case 18:
                _context5.next = 23;
                break;

              case 20:
                _context5.prev = 20;
                _context5.t0 = _context5["catch"](0);

                _logger["default"].error(new _CustomError.CustomError(500, _context5.t0));

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 20]]);
      }));

      function addMessageChat(_x3) {
        return _addMessageChat.apply(this, arguments);
      }

      return addMessageChat;
    }()
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!instance) {
        instance = new MessageService();
      }

      return instance;
    }
  }]);
  return MessageService;
}(_ContenedorMongo.ContenedorService);

exports.MessageService = MessageService;