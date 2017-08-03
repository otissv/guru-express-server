'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = exports.resolvers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolverMutationIdePersisted = require('./ide-persisted/resolver/resolverMutation-ide-persisted');

var _resolverMutationIdePersisted2 = _interopRequireDefault(_resolverMutationIdePersisted);

var _resolverQueryIdePersisted = require('./ide-persisted/resolver/resolverQuery-ide-persisted');

var _resolverQueryIdePersisted2 = _interopRequireDefault(_resolverQueryIdePersisted);

var _schemaQueryIdePersisted = require('./ide-persisted/schema/schemaQuery-ide-persisted');

var _schemaQueryIdePersisted2 = _interopRequireDefault(_schemaQueryIdePersisted);

var _schemaMutationPersisted = require('./ide-persisted/schema/schemaMutation-persisted');

var _schemaMutationPersisted2 = _interopRequireDefault(_schemaMutationPersisted);

var _schemaTypeIdePersisted = require('./ide-persisted/schema/schemaType-ide-persisted');

var _schemaTypeIdePersisted2 = _interopRequireDefault(_schemaTypeIdePersisted);

var _resolverMutationIdeQuery = require('./ide-query/resolver/resolverMutation-ide-query');

var _resolverMutationIdeQuery2 = _interopRequireDefault(_resolverMutationIdeQuery);

var _resolverQueryIdeQuery = require('./ide-query/resolver/resolverQuery-ide-query');

var _resolverQueryIdeQuery2 = _interopRequireDefault(_resolverQueryIdeQuery);

var _schemaQueryIdeQuery = require('./ide-query/schema/schemaQuery-ide-query');

var _schemaQueryIdeQuery2 = _interopRequireDefault(_schemaQueryIdeQuery);

var _schemaMutationQuery = require('./ide-query/schema/schemaMutation-query');

var _schemaMutationQuery2 = _interopRequireDefault(_schemaMutationQuery);

var _schemaTypeIdeQuery = require('./ide-query/schema/schemaType-ide-query');

var _schemaTypeIdeQuery2 = _interopRequireDefault(_schemaTypeIdeQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvers = exports.resolvers = {
  Query: _extends({}, idePersistedHistoryResolverPersisted, _resolverQueryIdePersisted2.default, _resolverQueryIdeQuery2.default),

  Mutation: _extends({}, idePersistedHistoryResolverMutation, _resolverMutationIdePersisted2.default, _resolverMutationIdeQuery2.default)
};

var schema = exports.schema = '\ntype Query {\n  ' + idePersistedHistorySchemaPersisted + '\n  ' + _schemaQueryIdePersisted2.default + '\n\n  ' + _schemaQueryIdeQuery2.default + '\n}\n\ntype Mutation {\n  ' + idePersistedHistorySchemaMutation + '\n  ' + _schemaMutationPersisted2.default + '\n\n  ' + _schemaMutationQuery2.default + '\n}\n\n' + idePersistedHistorySchemaType + '\n' + _schemaTypeIdePersisted2.default + '\n\n' + _schemaTypeIdeQuery2.default + '\n';
//# sourceMappingURL=index-ide.js.map