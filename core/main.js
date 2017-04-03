'use strict';

/*
* Main app 
*/
const environment = require('./environment');
const databases = require('./databases');
const middleware = require('./middleware/middleware-index');
const routes = require('./routes');


module.exports = function main (app, express) {
  environment(app);
  middleware(app, express);
  routes({
    app,
    context: {
      databases,
      locals: app.locals
    }
  });

};

