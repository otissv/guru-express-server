'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * Application Server
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */

exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var app, os, networkInterfaces, externalAddress, _server;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            app = (0, _express2.default)();
            os = require('os');
            networkInterfaces = os.networkInterfaces();
            _context.next = 6;
            return (0, _main2.default)({ app: app });

          case 6:

            app.set('port', process.env.PORT || app.locals.port);

            externalAddress = void 0;


            if (networkInterfaces.en0 === true) {
              externalAddress = networkInterfaces.en0[0].address;
            } else if (networkInterfaces.wlp4s0) {
              externalAddress = networkInterfaces.wlp4s0[0].address;
            }

            _server = app.listen(app.get('port'), function () {
              var port = _server.address().port;

              process.stdout.write('\nGuru Express server started in ' + app.get('env') + ' mode.\nLocal address : http://localhost:' + port + '\n' + (externalAddress ? 'External address ' + 'http://' + externalAddress + ':' + port : '') + '\n\n');
            });
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 12]]);
  }));

  function server() {
    return _ref.apply(this, arguments);
  }

  return server;
}();
//# sourceMappingURL=server.js.map