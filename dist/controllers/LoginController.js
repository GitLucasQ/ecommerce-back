"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUser = exports.principal = exports.logoutUser = exports.loginUser = exports.failSignup = exports.failLogin = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _UserService = require("../services/UserService");

var _logger = _interopRequireDefault(require("../shared/logger"));

var userService = new _UserService.UserService();

var principal = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var foundedUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.session.passport) {
              _context.next = 7;
              break;
            }

            _context.next = 3;
            return userService.getById(req.session.passport.user);

          case 3:
            foundedUser = _context.sent;
            res.render('index', {
              data: {
                name: foundedUser.email
              }
            });
            _context.next = 8;
            break;

          case 7:
            res.redirect('/login');

          case 8:
            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function principal(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.principal = principal;

var loginUser = function loginUser(req, res) {
  if (req.session.passport) {
    res.redirect('/');
  } else {
    res.render('login');
  }

  _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));
};

exports.loginUser = loginUser;

var failLogin = function failLogin(req, res) {
  res.render('faillogin');

  _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));
};

exports.failLogin = failLogin;

var logoutUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var foundedUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.session.passport) {
              _context2.next = 8;
              break;
            }

            _context2.next = 3;
            return userService.getById(req.session.passport.user);

          case 3:
            foundedUser = _context2.sent;
            res.render('logout', {
              data: {
                name: foundedUser.email
              }
            });
            req.session.destroy(function () {});
            _context2.next = 9;
            break;

          case 8:
            res.redirect('/login');

          case 9:
            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function logoutUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.logoutUser = logoutUser;

var registerUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res.render('register');

            _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function registerUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.registerUser = registerUser;

var failSignup = function failSignup(req, res) {
  res.render('failsignup');

  _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));
};

exports.failSignup = failSignup;