"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var passport = require('passport');

var router = new _express.Router();
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/failregister',
  failureFlash: true
}));
router.post('/signin', passport.authenticate('local-signin', {
  failureRedirect: '/login',
  successRedirect: '/',
  failureFlash: true
}));
var _default = router;
exports["default"] = _default;