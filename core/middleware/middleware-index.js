/*
* Application middleware
 */

'use strcit';

const shuttingDown = require('../middleware/middleware-shuttingDown');
const logger = require('../middleware/middleware-logger');
const body = require('../middleware/middleware-body');
const staticFiles = require('../middleware/middleware-staticFiles');
// const session = require('../backend/middleware/middleware-session');
const security = require('../middleware/middleware-security');
const views = require('../middleware/middleware-views');

module.exports = function middleware (app, express) {
  shuttingDown(app);
  logger(app);
  body(app);
  staticFiles(app, express);
  // session(app, mongodb.instance());
  security(app);
  views(app);
};
