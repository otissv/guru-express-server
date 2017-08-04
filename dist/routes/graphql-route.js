/*
* GraphQL rourte
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = graphqlRoute;

var _graphqlServerExpress = require('graphql-server-express');

var _graphqlTools = require('graphql-tools');

var _graphql = require('graphql');

var _cacheRoute = require('./cache-route');

var _cacheRoute2 = _interopRequireDefault(_cacheRoute);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _utils = require('../utils');

var _gqlMerge = require('gql-merge');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function graphqlRoute(_ref) {
  var app = _ref.app,
      context = _ref.context,
      schema = _ref.schema,
      resolvers = _ref.resolvers,
      routes = _ref.routes;

  var logger = { log: function log(e) {
      return console.log(e);
    } };

  function parsePersistedQuery(_ref2) {
    var req = _ref2.req,
        res = _ref2.res,
        next = _ref2.next,
        dir = _ref2.dir,
        whitelist = _ref2.whitelist;

    var query = req.body.query;
    var variables = req.body.variables || '{}';

    if (Array.isArray(query) && query[0]) {
      req.body = [].concat(_toConsumableArray(query)).map(function (item) {
        if (item.id) {
          var file = '' + dir + item.id + '-query.json';
          if (_fs2.default.existsSync(file)) {
            var queryDoc = _fs2.default.readFileSync(file, 'utf8');
            var itemVariables = item.variables ? item.variables : {};

            var vars = _extends({}, JSON.parse(variables), itemVariables);

            return {
              query: JSON.parse(queryDoc).query,
              operationName: item.operationName || null,
              variables: JSON.stringify(vars)
            };
          } else {
            console.log('The persisted query file not found');
            return res.status(400).json({
              errors: 'Invalid request'
            });
          }
        } else {
          if (whitelist) {
            console.log('The request is not a persisted query');
            return res.status(400).json({
              errors: 'Invalid request'
            });
          } else {
            return item;
          }
        }
      });

      next();
    } else {
      if (whitelist) {
        console.log('The request is not a persisted query');
        res.status('400').json({
          errors: 'Invalid request'
        });
      } else {
        next();
      }
    }
  }

  // function validateQueryOperation (req, res, next) {
  //   const queryAst = parse(req.body.query);

  //   queryAst.definitions.forEach(definition => {
  //     const operation = definition.operation;
  //     if (operation === 'mutation' || operation === 'query') {
  //       definition.selectionSet.selections.forEach(selection => {
  //         const result = schema.definition.operations[
  //           capitalize(operation)
  //         ].filter(item => item.name === selection.name.value);

  //         if (result.length === 0) {
  //           console.log(
  //             `Operation ${selection.name.value} does not exist in schema${operation}`
  //           );
  //           res.status('400').json({
  //             errors: 'Invalid request'
  //           });
  //         } else {
  //           next();
  //         }
  //       });
  //     } else {
  //       next();
  //     }
  //   });
  // }

  // app.use('/graphql', validateQueryOperation);

  app.use('/graphql', function (req, res, next) {
    parsePersistedQuery({
      req: req,
      res: res,
      next: next,
      dir: process.cwd() + '/server/queries/',
      whitelist: false
    });
  }, (0, _graphqlServerExpress.graphqlExpress)(function (req) {
    return {
      schema: (0, _graphqlTools.makeExecutableSchema)({
        typeDefs: schema.ast,
        resolvers: resolvers,
        logger: logger
      }),
      context: _extends({}, context, {
        cache: new _cacheRoute2.default(),
        req: req
      })
    };
  }));
}
//# sourceMappingURL=graphql-route.js.map