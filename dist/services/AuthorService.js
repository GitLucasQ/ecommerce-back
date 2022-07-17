"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthorService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ContenedorMongo = require("./ContenedorMongo");

var _Author = _interopRequireDefault(require("../models/Author"));

var _logger = _interopRequireDefault(require("../shared/logger"));

var _CustomError = require("../shared/CustomError");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var instance = null;

var AuthorService = /*#__PURE__*/function (_ContenedorService) {
  (0, _inherits2["default"])(AuthorService, _ContenedorService);

  var _super = _createSuper(AuthorService);

  function AuthorService() {
    (0, _classCallCheck2["default"])(this, AuthorService);
    return _super.call(this, _Author["default"]);
  }

  (0, _createClass2["default"])(AuthorService, [{
    key: "getAllAuthors",
    value: function () {
      var _getAllAuthors = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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

      function getAllAuthors() {
        return _getAllAuthors.apply(this, arguments);
      }

      return getAllAuthors;
    }()
  }, {
    key: "createAuthor",
    value: function () {
      var _createAuthor = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.create(data);

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

      function createAuthor(_x) {
        return _createAuthor.apply(this, arguments);
      }

      return createAuthor;
    }()
  }, {
    key: "getAuthorByEmail",
    value: function () {
      var _getAuthorByEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(email) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.model.findOne({
                  email: email
                });

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

      function getAuthorByEmail(_x2) {
        return _getAuthorByEmail.apply(this, arguments);
      }

      return getAuthorByEmail;
    }()
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!instance) {
        instance = new AuthorService();
      }

      return instance;
    }
  }]);
  return AuthorService;
}(_ContenedorMongo.ContenedorService);

exports.AuthorService = AuthorService;