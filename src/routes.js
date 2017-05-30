/*
* Application routes
*/

import coreRoutes from './routes/index-route';


function routes ({ app, context, schema, resolvers, routes, models }) {
  const pramas = { 
    app, 
    context: {
      ...context,
      locals: app.locals,
      models
    },
    resolvers,
    schema
  };

  routes(pramas);
  coreRoutes(pramas);
  // 404 page
};

export default routes;
