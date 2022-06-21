"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllAuthors = exports.createAuthor = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _AuthorService = require("../services/AuthorService");

var _logger = _interopRequireDefault(require("../shared/logger"));

var authorService = new _AuthorService.AuthorService();

var createAuthor = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, firstName, lastName, age, alias, avatar, createdAuthor;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, firstName = _req$body.firstName, lastName = _req$body.lastName, age = _req$body.age, alias = _req$body.alias, avatar = _req$body.avatar;
            _context.next = 3;
            return authorService.create({
              email: email,
              firstName: firstName,
              lastName: lastName,
              age: age,
              alias: alias,
              avatar: avatar
            });

          case 3:
            createdAuthor = _context.sent;
            res.status(201).json(createdAuthor);

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createAuthor(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createAuthor = createAuthor;

var getAllAuthors = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var authors;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return authorService.getAllAuthors();

          case 2:
            authors = _context2.sent;
            res.json(authors);

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllAuthors(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllAuthors = getAllAuthors;