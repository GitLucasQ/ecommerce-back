"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyLogged = void 0;

var verifyLogged = function verifyLogged(req, res, next) {
  if (req.session.passport) {
    next();
  } else {
    res.redirect('login');
  }
};

exports.verifyLogged = verifyLogged;