/*
* Application routes
*/

import coreRoutes from './routes/index-route';

function routes ({ app, context, schema, resolvers, routes }) {
  const pramas = {
    app,
    context,
    resolvers,
    schema
  };

  routes(pramas);
  coreRoutes(pramas);
  // 404 page
}

export default routes;
