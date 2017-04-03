/*
* Application environment variables,
*/

'use strict';

const config = require('../config');
const ENV = require('get-env')();


/*
* Export environment variables
*/
function env () {
  switch (ENV) {
    case 'dev' || 'development':
      return config.development;
    case 'staging':
      return config.staging;
    case 'prod' || 'production':
      return config.production;
    default:
      throw new Error('Unknown exception Environment:');
  }
};

exports = env;

/*
  *Application variables
  */
module.exports = function environment (app) {
  const config = env();
  
  app.set('baseURL', config.baseURL);
  app.locals = Object.assign({}, app.locals, config);
};
