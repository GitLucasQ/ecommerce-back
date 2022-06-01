"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _UserService = require("../services/UserService");

var passport = require('passport');

var userService = new _UserService.UserService();

var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id, done) {
    var foundedUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findById(id);

          case 2:
            foundedUser = _context.sent;
            done(null, foundedUser);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, email, password, done) {
    var foundedUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return userService.authenticateUser(email, password);

          case 2:
            foundedUser = _context2.sent;

            if (!foundedUser) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", done(null, foundedUser));

          case 7:
            return _context2.abrupt("return", done(null, false));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}()));
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, email, password, done) {
    var foundedUser, createdUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return userService.getUserByEmail(email);

          case 2:
            foundedUser = _context3.sent;

            if (!foundedUser) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", done(null, false));

          case 7:
            createdUser = new _User["default"]();
            createdUser.email = email;
            _context3.next = 11;
            return createdUser.encryptPassword(password);

          case 11:
            createdUser.password = _context3.sent;
            _context3.next = 14;
            return createdUser.save();

          case 14:
            return _context3.abrupt("return", done(null, createdUser));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x7, _x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}()));