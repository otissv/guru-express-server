'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = session;

var _csurf = require('csurf');

var _csurf2 = _interopRequireDefault(_csurf);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
*Application session
*/

function session(app) {
  app.use((0, _cookieParser2.default)());
  // CSRF
  app.use((0, _csurf2.default)());

  app.use(function (req, res, next) {
    var token = req.csrfToken();

    res.cookie('XSRF-TOKEN', token);
    next();
  });
};
//# sourceMappingURL=session-middleware.js.map