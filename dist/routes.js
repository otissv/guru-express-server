'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexRoute = require('./routes/index-route');

var _indexRoute2 = _interopRequireDefault(_indexRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(_ref) {
  var app = _ref.app,
      context = _ref.context,
      schema = _ref.schema,
      resolvers = _ref.resolvers,
      routes = _ref.routes;

  var pramas = {
    app: app,
    context: context,
    resolvers: resolvers,
    schema: schema
  };

  routes(pramas);
  (0, _indexRoute2.default)(pramas);
  // 404 page
} /*
  * Application routes
  */

exports.default = routes;
//# sourceMappingURL=routes.js.map