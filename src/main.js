/*
* Main app 
*/

import environment from './environment';
import routes from './routes';
import loader from '@graphql-guru/loader';
import databaseConnections from './database';
import middleware from './middleware/index-middleware';

export default async function main ({ app }) {
  try {
    const {
      databaseLoader,
      configLoader,
      modelLoader,
      middlewareLoader,
      jsonLoader,
      resolverLoader,
      routeLoader,
      schemaLoader
    } = await loader();

    // user defined context
    const context = {};

    // load environment variables
    environment({ app, config: configLoader });

    // load middleware
    middleware({
      app,
      middlewareLoader: middlewareLoader.default
    });

    // load resolvers
    const resolvers = resolverLoader.resolvers;
    const connectors = resolverLoader.connectors;

    // create route context
    const routesContext = {
      connectors,
      databases: databaseConnections({
        databases: databaseLoader,
        config: app.locals.database
      }),
      json: jsonLoader,
      locals: app.locals,
      models: modelLoader,
      ...context
    };

    routes({
      app,
      context: routesContext,
      resolvers,
      routes: () => routeLoader({ app, ...routesContext }),
      schema: schemaLoader
    });
  } catch (error) {
    console.log(error);
  }
}
