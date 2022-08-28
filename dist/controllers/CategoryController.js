"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategory = exports.getCategoryById = exports.getAllCategories = exports.deleteCategory = exports.createNewCategory = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _CategoryService = require("../services/CategoryService");

var _logger = _interopRequireDefault(require("../shared/logger"));

var categoryService = new _CategoryService.CategoryService();

var getAllCategories = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var categories;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return categoryService.getAllCategories();

          case 2:
            categories = _context.sent;
            res.json(categories);

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllCategories(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllCategories = getAllCategories;

var getCategoryById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, foundedCategory;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return categoryService.getCategoryById(id);

          case 3:
            foundedCategory = _context2.sent;
            res.json(foundedCategory);

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getCategoryById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCategoryById = getCategoryById;

var createNewCategory = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, name, price, photo, createdCategory;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, price = _req$body.price, photo = _req$body.photo;
            _context3.next = 3;
            return categoryService.createNewCategory({
              name: name,
              price: price,
              photo: photo
            });

          case 3:
            createdCategory = _context3.sent;
            res.status(201).json(createdCategory);

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createNewCategory(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createNewCategory = createNewCategory;

var updateCategory = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _req$body2, name, price, photo, updatedCategory;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, price = _req$body2.price, photo = _req$body2.photo;
            _context4.next = 4;
            return categoryService.updateCategory(id, {
              name: name,
              price: price,
              photo: photo
            });

          case 4:
            updatedCategory = _context4.sent;
            res.status(200).json(updatedCategory);

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateCategory(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateCategory = updateCategory;

var deleteCategory = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return categoryService["delete"](id);

          case 3:
            res.status(200).send('Categoría eliminada con éxito');

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteCategory(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteCategory = deleteCategory;