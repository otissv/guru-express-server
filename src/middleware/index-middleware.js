/*
* Application middleware
 */

import logger from './logger-middleware';
import body from './body-middleware';
import staticFiles from './staticFiles-middleware';
// // import session from './session-middleware');
import security from './security-middleware';
import views from './views-middleware';

export default function middleware ({ app, middlewareLoader }) {
  logger(app);
  body(app);
  staticFiles(app);
  // // session(app, mongodb.instance());
  security(app);
  views(app);
  middlewareLoader(app);
};
