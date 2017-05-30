'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _environment = require('./environment');

var _environment2 = _interopRequireDefault(_environment);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _indexLoader = require('../../loaders/dist/index-loader');

var _indexLoader2 = _interopRequireDefault(_indexLoader);

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

var _indexMiddleware = require('./middleware/index-middleware');

var _indexMiddleware2 = _interopRequireDefault(_indexMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * Main app 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */

// import loader from '@guru/loader';


exports.default = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
    var app = _ref2.app;

    var _ref3, databaseLoader, configLoader, middlewareLoader, modelLoader, resolverLoader, routeLoader, schemaLoader, context, resolvers, connectors, routesContext;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _indexLoader2.default)();

          case 3:
            _ref3 = _context.sent;
            databaseLoader = _ref3.databaseLoader;
            configLoader = _ref3.configLoader;
            middlewareLoader = _ref3.middlewareLoader;
            modelLoader = _ref3.modelLoader;
            resolverLoader = _ref3.resolverLoader;
            routeLoader = _ref3.routeLoader;
            schemaLoader = _ref3.schemaLoader;


            // user defined context
            context = {};

            // load environment variables

            (0, _environment2.default)({ app: app, config: configLoader });

            // load middleware
            (0, _indexMiddleware2.default)({
              app: app,
              middlewareLoader: middlewareLoader.default
            });

            // load resolvers
            resolvers = resolverLoader.resolvers;
            connectors = resolverLoader.connectors;

            // load schema definitions

            routesContext = _extends({
              connectors: connectors,
              databases: (0, _database2.default)({
                databases: databaseLoader,
                config: app.locals.database
              }),
              locals: app.locals
            }, context);


            (0, _routes2.default)({
              app: app,
              context: routesContext,
              models: modelLoader,
              resolvers: resolvers,
              routes: function routes() {
                return routeLoader(_extends({ app: app }, routesContext));
              },
              schema: schemaLoader
            });
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 23:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 20]]);
  }));

  function main(_x) {
    return _ref.apply(this, arguments);
  }

  return main;
}();
//# sourceMappingURL=main.js.map