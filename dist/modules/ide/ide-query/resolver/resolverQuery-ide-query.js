'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _constants = require('../../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fs = _bluebird2.default.promisifyAll(require('fs'));
var mkdir = _shelljs2.default.mkdir,
    ls = _shelljs2.default.ls,
    error = _shelljs2.default.error;
exports.default = {
  ideQueryFindAll: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(obj, args, context) {
      var files, queries;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              ls(_constants.QUERY_DIRECTORY);

              if (!error()) {
                _context2.next = 8;
                break;
              }

              mkdir(_constants.QUERY_DIRECTORY);
              console.log('Created queries directory');
              return _context2.abrupt('return', _bluebird2.default.resolve([]));

            case 8:
              _context2.next = 10;
              return fs.readdirAsync(_constants.QUERY_DIRECTORY);

            case 10:
              files = _context2.sent;

              if (!(files.length > 0)) {
                _context2.next = 17;
                break;
              }

              _context2.next = 14;
              return _bluebird2.default.all(files.map(function () {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(file) {
                  var content, contentParse;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return fs.readFileAsync(_constants.QUERY_DIRECTORY + '/' + file, 'utf8');

                        case 3:
                          content = _context.sent;
                          contentParse = JSON.parse(content);
                          return _context.abrupt('return', contentParse.results ? _extends({}, contentParse, {
                            results: JSON.stringify(contentParse.results)
                          }) : contentParse);

                        case 8:
                          _context.prev = 8;
                          _context.t0 = _context['catch'](0);

                          console.log(_context.t0);

                        case 11:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, undefined, [[0, 8]]);
                }));

                return function (_x4) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 14:
              _context2.t0 = _context2.sent;
              _context2.next = 18;
              break;

            case 17:
              _context2.t0 = _bluebird2.default.resolve([]);

            case 18:
              queries = _context2.t0;
              return _context2.abrupt('return', queries);

            case 20:
              _context2.next = 25;
              break;

            case 22:
              _context2.prev = 22;
              _context2.t1 = _context2['catch'](0);
              return _context2.abrupt('return', _context2.t1);

            case 25:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 22]]);
    }));

    return function ideQueryFindAll(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()
};
//# sourceMappingURL=resolverQuery-ide-query.js.map