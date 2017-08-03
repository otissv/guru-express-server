import idePersistedResolverMutation from './ide-persisted/resolver/resolverMutation-ide-persisted';
import idePersistedResolverQuery from './ide-persisted/resolver/resolverQuery-ide-persisted'; 
import idePersistedSchemaMutation from './ide-persisted/schema/schemaMutation-persisted'; 
import idePersistedSchemaQuery from './ide-persisted/schema/schemaQuery-ide-persisted'; 
import idePersistedSchemaType  from './ide-persisted/schema/schemaType-ide-persisted';

import ideQueryResolverMutation from './ide-query/resolver/resolverMutation-ide-query';
import ideQueryResolverQuery from './ide-query/resolver/resolverQuery-ide-query';
import ideQuerySchemaMutation from './ide-query/schema/schemaMutation-query';
import ideQuerySchemaQuery from './ide-query/schema/schemaQuery-ide-query';
import ideQuerySchemaType from './ide-query/schema/schemaType-ide-query';

export const resolvers = {
  Query: {
    ...idePersistedResolverQuery,
    ...ideQueryResolverQuery
  },

  Mutation: {
    ...idePersistedResolverMutation,
    ...ideQueryResolverMutation
  }
};

export const schema = `
type Query {
  ${idePersistedSchemaQuery}
  ${ideQuerySchemaQuery}
}

type Mutation {
  ${idePersistedSchemaMutation}
  ${ideQuerySchemaMutation}
}


${idePersistedSchemaType}
${ideQuerySchemaType}

type ERROR_ {
  type:    String
  message: String
}

type RESULTS_ {
  result: String
  error:  ERROR_
}
`;
