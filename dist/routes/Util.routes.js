"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _UtilController = require("../controllers/UtilController");

var router = (0, _express.Router)();
router.get('/randoms', _UtilController.generateRandomNumbers);
router.get('/datos', _UtilController.getDatos);
var _default = router;
exports["default"] = _default;