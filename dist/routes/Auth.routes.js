"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

// import { UploadFile } from '../middlewares/uploadFile';
var passport = require('passport');

var router = new _express.Router(); // CONFIG MULTER

var multer = require('multer');

var multerStorage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'src/public');
  },
  filename: function filename(req, file, cb) {
    var ext = file.mimetype.split('/')[1];
    var filename = file.originalname.split('.')[0];
    cb(null, "images/".concat(filename, "-").concat(Date.now(), ".").concat(ext));
  }
});

var multerFilter = function multerFilter(req, file, cb) {
  if (['png', 'jpeg', 'jpg'].includes(file.mimetype.split('/')[1])) {
    cb(null, true);
  } else {
    cb(new Error('No es una imagen'), false);
  }
};

var upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});
router.post('/signup', upload.single('photo'), passport.authenticate('local-signup', {
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