import ideQueryHistoryResolverMutation
  from './ide-query-history/resolverMutation-ide-query-history';
import ideQueryHistoryResolverQuery
  from './ide-query-history/resolverQuery-ide-query-history';
import ideQueryHistorySchemaQuery
  from './ide-query-history/schemaQuery-ide-query-history';
import ideQueryHistorySchemaMutation
  from './ide-query-history/schemaMutation-ide-query-history';
import ideQueryHistorySchemaType
  from './ide-query-history/schemaType-ide-query-history';

import ideQueryResolverMutation from './ide-query/resolverMutation-ide-query';
import ideQueryResolverQuery from './ide-query/resolverQuery-ide-query';
import ideQuerySchemaQuery from './ide-query/schemaQuery-ide-query';
import ideQuerySchemaMutation from './ide-query/schemaMutation-query';
import ideQuerySchemaType from './ide-query/schemaType-ide-query';

export const resolvers = {
  Query: {
    ...ideQueryHistoryResolverQuery,
    ...ideQueryResolverQuery
  },

  Mutation: {
    ...ideQueryHistoryResolverMutation,
    ...ideQueryResolverMutation
  }
};

export const schema = `
type Query {
  ${ideQueryHistorySchemaQuery}
  ${ideQuerySchemaQuery}
}

type Mutation {
  ${ideQueryHistorySchemaMutation}
  ${ideQuerySchemaMutation}
}

${ideQueryHistorySchemaType}
${ideQuerySchemaType}
`;
