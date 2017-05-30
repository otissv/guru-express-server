/*
* Main app 
*/

import environment from './environment';
import routes from './routes';
// import loader from '@guru/loader';
import loader from '../../loaders/dist/index-loader';
import databaseConnections from './database';
import middleware from './middleware/index-middleware';

export default async function main ({ app }) {
  try {
    const {
      databaseLoader,
      configLoader,
      middlewareLoader,
      modelLoader,
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

    // load schema definitions
    const routesContext = {
      connectors,
      databases: databaseConnections({
        databases: databaseLoader,
        config: app.locals.database
      }),
      locals: app.locals,
      ...context
    };

    routes({
      app,
      context: routesContext,
      models: modelLoader,
      resolvers,
      routes: () => routeLoader({ app, ...routesContext }),
      schema: schemaLoader
    });
  } catch (error) {
    console.log(error);
  }
}
