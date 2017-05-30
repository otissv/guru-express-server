'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = staticFiles;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function staticFiles(app) {
  app.use((0, _compression2.default)({
    filter: function filter(req, res) {
      return (/json|text|javascript|css/.test(res.getHeader('Content-Type'))
      );
    },
    level: 9
  }));

  // Static files locations
  app.use(_express2.default.static(app.locals.paths.public));
} /*
  * Application static files
  */

;
//# sourceMappingURL=staticFiles-middleware.js.map