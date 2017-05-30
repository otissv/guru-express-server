'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logger;

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Application logger
*/

var dest = process.cwd() + '/logs';

function logger(app) {
  var ACCESS_LOG = dest + '/access.log';
  var ERROR_LOG = dest + '/error.log';

  // create a write stream (in append mode)
  var accessLogStream = _fs2.default.createWriteStream(ACCESS_LOG, { flags: 'a' });

  // setup the logger
  app.use((0, _morgan2.default)('combined', { stream: accessLogStream }));

  if (app.get('env') === 'development') {
    app.use((0, _morgan2.default)('dev'));
  }

  // Error logger
  var tsFormat = function tsFormat() {
    return new Date();
  };

  var logger = new _winston2.default.Logger({
    transports: [new _winston2.default.transports.Console({
      timestamp: tsFormat,
      colorize: true
    }), new _winston2.default.transports.File({
      filename: _path2.default.join(__dirname, ERROR_LOG),
      timestamp: tsFormat
    })]
  });

  app.locals.logger = function (log, level) {
    // const logLevel = level || env === 'production' ? 'info' : 'verbose';
    logger.log('info', log);
  };
};
//# sourceMappingURL=logger-middleware.js.map