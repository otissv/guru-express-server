import idePersistedHistoryResolverMutation from './ide-persisted-history/resolver/resolverMutation-ide-persisted-history';
import idePersistedHistoryResolverPersisted from './ide-persisted-history/resolver/resolverQuery-ide-persisted-history';
import idePersistedHistorySchemaPersisted from './ide-persisted-history/schema/schemaQuery-ide-persisted-history';
import idePersistedHistorySchemaMutation from './ide-persisted-history/schema/schemaMutation-ide-persisted-history';
import idePersistedHistorySchemaType from './ide-persisted-history/schema/schemaType-ide-persisted-history';

import idePersistedResolverMutation from './ide-persisted/resolver/resolverMutation-ide-persisted';
import idePersistedResolverPersisted from './ide-persisted/resolver/resolverQuery-ide-persisted';
import idePersistedSchemaPersisted from './ide-persisted/schema/schemaQuery-ide-persisted';
import idePersistedSchemaMutation from './ide-persisted/schema/schemaMutation-persisted';
import idePersistedSchemaType from './ide-persisted/schema/schemaType-ide-persisted';

import ideQueryHistoryResolverMutation from './ide-query-history/resolver/resolverMutation-ide-query-history';
import ideQueryHistoryResolverQuery from './ide-query-history/resolver/resolverQuery-ide-query-history';
import ideQueryHistorySchemaQuery from './ide-query-history/schema/schemaQuery-ide-query-history';
import ideQueryHistorySchemaMutation from './ide-query-history/schema/schemaMutation-ide-query-history';
import ideQueryHistorySchemaType from './ide-query-history/schema/schemaType-ide-query-history';

import ideQueryResolverMutation from './ide-query/resolver/resolverMutation-ide-query';
import ideQueryResolverQuery from './ide-query/resolver/resolverQuery-ide-query';
import ideQuerySchemaQuery from './ide-query/schema/schemaQuery-ide-query';
import ideQuerySchemaMutation from './ide-query/schema/schemaMutation-query';
import ideQuerySchemaType from './ide-query/schema/schemaType-ide-query';

export const resolvers = {
  Query: {
    ...idePersistedHistoryResolverPersisted,
    ...idePersistedResolverPersisted,

    ...ideQueryHistoryResolverQuery,
    ...ideQueryResolverQuery
  },

  Mutation: {
    ...idePersistedHistoryResolverMutation,
    ...idePersistedResolverMutation,

    ...ideQueryHistoryResolverMutation,
    ...ideQueryResolverMutation
  }
};

export const schema = `
type Query {
  ${idePersistedHistorySchemaPersisted}
  ${idePersistedSchemaPersisted}

  ${ideQueryHistorySchemaQuery}
  ${ideQuerySchemaQuery}
}

type Mutation {
  ${idePersistedHistorySchemaMutation}
  ${idePersistedSchemaMutation}

  ${ideQueryHistorySchemaMutation}
  ${ideQuerySchemaMutation}
}

${idePersistedHistorySchemaType}
${idePersistedSchemaType}

${ideQueryHistorySchemaType}
${ideQuerySchemaType}
`;
