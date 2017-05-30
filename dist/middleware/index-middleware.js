'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = middleware;

var _loggerMiddleware = require('./logger-middleware');

var _loggerMiddleware2 = _interopRequireDefault(_loggerMiddleware);

var _bodyMiddleware = require('./body-middleware');

var _bodyMiddleware2 = _interopRequireDefault(_bodyMiddleware);

var _staticFilesMiddleware = require('./staticFiles-middleware');

var _staticFilesMiddleware2 = _interopRequireDefault(_staticFilesMiddleware);

var _securityMiddleware = require('./security-middleware');

var _securityMiddleware2 = _interopRequireDefault(_securityMiddleware);

var _viewsMiddleware = require('./views-middleware');

var _viewsMiddleware2 = _interopRequireDefault(_viewsMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // import session from './session-middleware');
function middleware(_ref) {
  var app = _ref.app,
      middlewareLoader = _ref.middlewareLoader;

  (0, _loggerMiddleware2.default)(app);
  (0, _bodyMiddleware2.default)(app);
  (0, _staticFilesMiddleware2.default)(app);
  // // session(app, mongodb.instance());
  (0, _securityMiddleware2.default)(app);
  (0, _viewsMiddleware2.default)(app);
  middlewareLoader(app);
} /*
  * Application middleware
   */

;
//# sourceMappingURL=index-middleware.js.map