'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = views;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function views(app) {
  var VIEWS = app.locals.paths.views;

  app.set('views', VIEWS);
  app.engine('.hbs', (0, _expressHandlebars2.default)({
    extname: '.hbs',
    layoutsDir: VIEWS
  }));

  app.set('view engine', '.hbs');
};
//# sourceMappingURL=views-middleware.js.map