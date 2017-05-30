/*
* Application environment variables,
*/

import getEnv from 'get-env';

/*
* Export environment variables
*/
const ENV = getEnv();

function env (config) {
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

/*
  *Application variables
  */
export default function environment ({ app, config }) {
  app.locals = { 
    ...app.locals, 
    ...env(config),
    paths: {
      views: `${process.cwd()}/server/views`,
      public: `${process.cwd()}/public/`
    }
  };
};
