"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContenedorService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ContenedorService = /*#__PURE__*/function () {
  function ContenedorService(model) {
    (0, _classCallCheck2["default"])(this, ContenedorService);
    this.model = model;
  }

  (0, _createClass2["default"])(ContenedorService, [{
    key: "getAll",
    value: function getAll() {
      try {
        return this.model.find();
      } catch (error) {
        console.error('Sucedió un error', error);
      }
    }
  }, {
    key: "getById",
    value: function getById(id) {
      try {
        return this.model.findById(id);
      } catch (error) {
        console.error('Sucedió un error', error);
      }
    }
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return new this.model(data).save();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.error('Sucedió un error', _context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function update(id, data) {
      try {
        return this.model.findByIdAndUpdate({
          _id: id
        }, {
          $set: data
        });
      } catch (error) {
        console.error('Sucedió un error', error);
      }
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      try {
        return this.model.findByIdAndDelete({
          _id: id
        });
      } catch (error) {
        console.error('Sucedió un error', error);
      }
    }
  }]);
  return ContenedorService;
}();

exports.ContenedorService = ContenedorService;