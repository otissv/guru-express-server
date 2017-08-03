import idePersistedResolverMutation from './ide-persisted/resolver/resolverMutation-ide-persisted';
import idePersistedResolverPersisted from './ide-persisted/resolver/resolverQuery-ide-persisted';
import idePersistedSchemaPersisted from './ide-persisted/schema/schemaQuery-ide-persisted';
import idePersistedSchemaMutation from './ide-persisted/schema/schemaMutation-persisted';
import idePersistedSchemaType from './ide-persisted/schema/schemaType-ide-persisted';

import ideQueryResolverMutation from './ide-query/resolver/resolverMutation-ide-query';
import ideQueryResolverQuery from './ide-query/resolver/resolverQuery-ide-query';
import ideQuerySchemaQuery from './ide-query/schema/schemaQuery-ide-query';
import ideQuerySchemaMutation from './ide-query/schema/schemaMutation-query';
import ideQuerySchemaType from './ide-query/schema/schemaType-ide-query';

export const resolvers = {
  Query: {
    ...idePersistedHistoryResolverPersisted,
    ...idePersistedResolverPersisted,

    ...ideQueryResolverQuery
  },

  Mutation: {
    ...idePersistedHistoryResolverMutation,
    ...idePersistedResolverMutation,

    ...ideQueryResolverMutation
  }
};

export const schema = `
type Query {
  ${idePersistedHistorySchemaPersisted}
  ${idePersistedSchemaPersisted}

  ${ideQuerySchemaQuery}
}

type Mutation {
  ${idePersistedHistorySchemaMutation}
  ${idePersistedSchemaMutation}

  ${ideQuerySchemaMutation}
}

${idePersistedHistorySchemaType}
${idePersistedSchemaType}

${ideQuerySchemaType}
`;
