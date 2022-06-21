"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProcessInfo = void 0;

var _logger = _interopRequireDefault(require("../shared/logger"));

var getProcessInfo = function getProcessInfo(req, res) {
  var _process = process,
      argv = _process.argv,
      execPath = _process.execPath,
      platform = _process.platform,
      pid = _process.pid,
      version = _process.version;
  var rss = process.memoryUsage().rss;
  var folder = process.cwd();
  var args = argv.slice(2);
  var data = {
    args: args,
    execPath: execPath,
    platform: platform,
    pid: pid,
    version: version,
    rss: rss,
    folder: folder,
    cpus: require('os').cpus().length
  };
  res.render('info', {
    data: data
  });

  _logger["default"].info("".concat(req.method, " ").concat(req.originalUrl, " - ").concat(new Date().toLocaleString()));
};

exports.getProcessInfo = getProcessInfo;