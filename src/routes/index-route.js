import graphqlRoute from './graphql-route';
import ideRoute from './ide-route';
import schemaRoute from './schema-route';

export default function coreRoutes ({ app, context, schema, resolvers }) {
  const params = { app, context, schema, resolvers };

  graphqlRoute(params);
  ideRoute(params);
  schemaRoute(params);
}
