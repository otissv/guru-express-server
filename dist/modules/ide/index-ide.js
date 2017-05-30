'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = exports.resolvers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolverMutationIdeQueryHistory = require('./ide-query-history/resolverMutation-ide-query-history');

var _resolverMutationIdeQueryHistory2 = _interopRequireDefault(_resolverMutationIdeQueryHistory);

var _resolverQueryIdeQueryHistory = require('./ide-query-history/resolverQuery-ide-query-history');

var _resolverQueryIdeQueryHistory2 = _interopRequireDefault(_resolverQueryIdeQueryHistory);

var _schemaQueryIdeQueryHistory = require('./ide-query-history/schemaQuery-ide-query-history');

var _schemaQueryIdeQueryHistory2 = _interopRequireDefault(_schemaQueryIdeQueryHistory);

var _schemaMutationIdeQueryHistory = require('./ide-query-history/schemaMutation-ide-query-history');

var _schemaMutationIdeQueryHistory2 = _interopRequireDefault(_schemaMutationIdeQueryHistory);

var _schemaTypeIdeQueryHistory = require('./ide-query-history/schemaType-ide-query-history');

var _schemaTypeIdeQueryHistory2 = _interopRequireDefault(_schemaTypeIdeQueryHistory);

var _resolverMutationIdeQuery = require('./ide-query/resolverMutation-ide-query');

var _resolverMutationIdeQuery2 = _interopRequireDefault(_resolverMutationIdeQuery);

var _resolverQueryIdeQuery = require('./ide-query/resolverQuery-ide-query');

var _resolverQueryIdeQuery2 = _interopRequireDefault(_resolverQueryIdeQuery);

var _schemaQueryIdeQuery = require('./ide-query/schemaQuery-ide-query');

var _schemaQueryIdeQuery2 = _interopRequireDefault(_schemaQueryIdeQuery);

var _schemaMutationQuery = require('./ide-query/schemaMutation-query');

var _schemaMutationQuery2 = _interopRequireDefault(_schemaMutationQuery);

var _schemaTypeIdeQuery = require('./ide-query/schemaType-ide-query');

var _schemaTypeIdeQuery2 = _interopRequireDefault(_schemaTypeIdeQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvers = exports.resolvers = {
  Query: _extends({}, _resolverQueryIdeQueryHistory2.default, _resolverQueryIdeQuery2.default),

  Mutation: _extends({}, _resolverMutationIdeQueryHistory2.default, _resolverMutationIdeQuery2.default)
};

var schema = exports.schema = '\ntype Query {\n  ' + _schemaQueryIdeQueryHistory2.default + '\n  ' + _schemaQueryIdeQuery2.default + '\n}\n\ntype Mutation {\n  ' + _schemaMutationIdeQueryHistory2.default + '\n  ' + _schemaMutationQuery2.default + '\n}\n\n' + _schemaTypeIdeQueryHistory2.default + '\n' + _schemaTypeIdeQuery2.default + '\n';
//# sourceMappingURL=index-ide.js.map