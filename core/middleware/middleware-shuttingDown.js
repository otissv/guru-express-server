/*
* Application is shutting down
*/

'use strict';


module.exports = function shutDown (app) {
  app.use((req, res, next) => {
    if (app.get('shuttingDown')) {
      return;
    }
    next();
  });
};

