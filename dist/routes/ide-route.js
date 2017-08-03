/*
* GraphQL rourte
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ideRoute;

var _graphqlServerExpress = require('graphql-server-express');

var _graphqlTools = require('graphql-tools');

var _graphql = require('graphql');

var _indexIde = require('../modules/ide/index-ide');

function ideRoute(_ref) {
  var app = _ref.app,
      context = _ref.context;

  var logger = { log: function log(e) {
      return console.log(e);
    } };

  app.route('/ide/schema').get(function (req, res) {
    return res.json((0, _graphql.parse)(_indexIde.schema));
  });

  app.use('/ide', (0, _graphqlServerExpress.graphqlExpress)(function (req) {
    return {
      schema: (0, _graphqlTools.makeExecutableSchema)({
        typeDefs: _indexIde.schema,
        resolvers: _indexIde.resolvers,
        logger: logger
      }),
      context: _extends({}, context, {
        req: req
      })
    };
  }));
}
//# sourceMappingURL=ide-route.js.map