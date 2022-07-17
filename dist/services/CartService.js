"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ContenedorMongo = require("./ContenedorMongo");

var _Cart = _interopRequireDefault(require("../models/Cart"));

var _logger = _interopRequireDefault(require("../shared/logger"));

var _CustomError = require("../shared/CustomError");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var instance = null;

var CartService = /*#__PURE__*/function (_ContenedorService) {
  (0, _inherits2["default"])(CartService, _ContenedorService);

  var _super = _createSuper(CartService);

  function CartService() {
    (0, _classCallCheck2["default"])(this, CartService);
    return _super.call(this, _Cart["default"]);
  }

  (0, _createClass2["default"])(CartService, [{
    key: "findCart",
    value: function () {
      var _findCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _Cart["default"].findOne({
                  user: user
                });

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
        }, _callee, null, [[0, 6]]);
      }));

      function findCart(_x) {
        return _findCart.apply(this, arguments);
      }

      return findCart;
    }()
  }, {
    key: "createNewCart",
    value: function () {
      var _createNewCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
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

      function createNewCart(_x2) {
        return _createNewCart.apply(this, arguments);
      }

      return createNewCart;
    }()
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!instance) {
        instance = new CartService();
      }

      return instance;
    }
  }]);
  return CartService;
}(_ContenedorMongo.ContenedorService);

exports.CartService = CartService;