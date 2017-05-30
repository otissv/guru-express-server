'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = coreRoutes;

var _graphqlRoute = require('./graphql-route');

var _graphqlRoute2 = _interopRequireDefault(_graphqlRoute);

var _ideRoute = require('./ide-route');

var _ideRoute2 = _interopRequireDefault(_ideRoute);

var _schemaRoute = require('./schema-route');

var _schemaRoute2 = _interopRequireDefault(_schemaRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function coreRoutes(_ref) {
  var app = _ref.app,
      context = _ref.context,
      schema = _ref.schema,
      resolvers = _ref.resolvers;

  var params = { app: app, context: context, schema: schema, resolvers: resolvers };

  (0, _graphqlRoute2.default)(params);
  (0, _ideRoute2.default)(params);
  (0, _schemaRoute2.default)(params);
}
//# sourceMappingURL=index-route.js.map