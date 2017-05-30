'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipeAsync = exports.capitalize = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = cleanObj;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var capitalize = exports.capitalize = function capitalize(str) {
  var firstCharUpperCase = str.charAt(0).toUpperCase();
  return '' + firstCharUpperCase + str.substr(1, str.length - 1);
};

function cleanObj(obj) {
  Object.keys(obj).forEach(function (key) {
    return obj[key] && _typeof(obj[key]) === 'object' && cleanObj(obj[key]) || (obj[key] === undefined || obj[key] === null) && delete obj[key];
  });
  return obj;
}

var pipeAsync = exports.pipeAsync = function pipeAsync(sequence) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(initialValue) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _bluebird2.default.reduce(sequence, function () {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(previous, current) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return current(previous);

                        case 3:
                          return _context.abrupt('return', _context.sent);

                        case 6:
                          _context.prev = 6;
                          _context.t0 = _context['catch'](0);

                          process.stdout.write(_context.t0);

                        case 9:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, undefined, [[0, 6]]);
                }));

                return function (_x2, _x3) {
                  return _ref2.apply(this, arguments);
                };
              }(), initialValue).catch(function (error) {
                return process.stdout.write(error);
              });

            case 3:
              return _context2.abrupt('return', _context2.sent);

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2['catch'](0);

              process.stdout.write(_context2.t0);

            case 9:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 6]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=utils.js.map