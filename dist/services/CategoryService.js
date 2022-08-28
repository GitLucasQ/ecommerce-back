"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ContenedorMongo = require("./ContenedorMongo");

var _Category = _interopRequireDefault(require("../models/Category"));

var _logger = _interopRequireDefault(require("../shared/logger"));

var _CustomError = require("../shared/CustomError");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var instance = null;

var CategoryService = /*#__PURE__*/function (_ContenedorService) {
  (0, _inherits2["default"])(CategoryService, _ContenedorService);

  var _super = _createSuper(CategoryService);

  function CategoryService() {
    (0, _classCallCheck2["default"])(this, CategoryService);
    return _super.call(this, _Category["default"]);
  }

  (0, _createClass2["default"])(CategoryService, [{
    key: "getAllCategories",
    value: function () {
      var _getAllCategories = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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

      function getAllCategories() {
        return _getAllCategories.apply(this, arguments);
      }

      return getAllCategories;
    }()
  }, {
    key: "getCategoryById",
    value: function () {
      var _getCategoryById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
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

      function getCategoryById(_x) {
        return _getCategoryById.apply(this, arguments);
      }

      return getCategoryById;
    }()
  }, {
    key: "createNewCategory",
    value: function () {
      var _createNewCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
        var createdCategory;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.create(data);

              case 3:
                createdCategory = _context3.sent;
                return _context3.abrupt("return", createdCategory === null || createdCategory === void 0 ? void 0 : createdCategory._id);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);

                _logger["default"].error(new _CustomError.CustomError(500, _context3.t0));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function createNewCategory(_x2) {
        return _createNewCategory.apply(this, arguments);
      }

      return createNewCategory;
    }()
  }, {
    key: "updateCategory",
    value: function () {
      var _updateCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, data) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.update(id, data);

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

      function updateCategory(_x3, _x4) {
        return _updateCategory.apply(this, arguments);
      }

      return updateCategory;
    }()
  }, {
    key: "deleteCategory",
    value: function () {
      var _deleteCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this["delete"](id);

              case 3:
                _context5.next = 8;
                break;

              case 5:
                _context5.prev = 5;
                _context5.t0 = _context5["catch"](0);

                _logger["default"].error(new _CustomError.CustomError(500, _context5.t0));

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 5]]);
      }));

      function deleteCategory(_x5) {
        return _deleteCategory.apply(this, arguments);
      }

      return deleteCategory;
    }()
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!instance) {
        instance = new CategoryService();
      }

      return instance;
    }
  }]);
  return CategoryService;
}(_ContenedorMongo.ContenedorService);

exports.CategoryService = CategoryService;