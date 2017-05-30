'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                  * Application routes
                                                                                                                                                                                                                                                                  */

var _indexRoute = require('./routes/index-route');

var _indexRoute2 = _interopRequireDefault(_indexRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(_ref) {
  var app = _ref.app,
      context = _ref.context,
      schema = _ref.schema,
      resolvers = _ref.resolvers,
      routes = _ref.routes,
      models = _ref.models;

  var pramas = {
    app: app,
    context: _extends({}, context, {
      locals: app.locals,
      models: models
    }),
    resolvers: resolvers,
    schema: schema
  };

  routes(pramas);
  (0, _indexRoute2.default)(pramas);
  // 404 page
};

exports.default = routes;
//# sourceMappingURL=routes.js.map