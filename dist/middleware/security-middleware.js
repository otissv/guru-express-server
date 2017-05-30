'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = security;

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
                                                                                                                                                                                                    * Application security
                                                                                                                                                                                                    */

function security(app) {
  app.disable('x-powered-by');

  // add localhost to white list
  var appWhitelist = app.locals.whitelist ? app.locals.whitelist : [];
  var localHosts = Array.apply(null, { length: 9999 }).map(Number.call, function (Number) {
    return 'http://localhost:' + Number;
  });

  var whitelist = [].concat(_toConsumableArray(appWhitelist), _toConsumableArray(localHosts));

  var corsOptions = {
    origin: function origin(_origin, callback) {
      var originIsWhitelisted = whitelist.indexOf(_origin) !== -1;
      callback(null, originIsWhitelisted);
    }
  };

  app.use((0, _cors2.default)(corsOptions));

  // pre-flight
  app.options('*', (0, _cors2.default)(corsOptions));

  // Content Security Policy
  if (app.get('env') !== 'development') {
    app.use(_helmet2.default.contentSecurityPolicy({
      directives: {
        defaultSrc: ['self'],
        scriptSrc: ['*.google-analytics.com'],
        styleSrc: ['unsafe-inline'],
        imgSrc: ['*.google-analytics.com'],
        connectSrc: ['none'],
        fontSrc: [],
        objectSrc: [],
        mediaSrc: [],
        frameSrc: []
      }
    }));
  }

  app.use(_helmet2.default.xssFilter());
  app.use(_helmet2.default.frameguard());
  app.use(_helmet2.default.hsts({
    maxAge: 7776000000,
    includeSubdomains: true
  }));
  app.use(_helmet2.default.noSniff());
  app.use(_helmet2.default.ieNoOpen());
  app.use(_helmet2.default.hidePoweredBy());
  app.use(_helmet2.default.dnsPrefetchControl());
  // app.use(require('express-enforces-ssl'));
  // app.use(helmet.hpkp({
  //   maxAge: ninetyDaysInMilliseconds,
  //   sha256s: ['AbCdEf123=', 'ZyXwVu456='],
  //   includeSubdomains: true,         // optional
  //   reportUri: 'http://example.com'  // optional
  //   reportOnly: false,               // optional
  //
  //   // Set the header based on a condition.
  //   // This is optional.
  //   setIf: function (req, res) {
  //     return req.secure
  //   }
  // }))
};
//# sourceMappingURL=security-middleware.js.map