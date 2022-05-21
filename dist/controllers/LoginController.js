"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = void 0;

var loginUser = function loginUser(req, res) {
  var name = req.body.name;

  if (name === undefined) {
    res.redirect('/login');
  } else {
    req.session.name = name;
    res.redirect('/');
  }
};

exports.loginUser = loginUser;