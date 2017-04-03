/*
* Application logger
*/

'use strict';

const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const winston = require('winston');

module.exports = function logger (app) {
  const ACCESS_LOG = '../../logs/access.log';
  const ERROR_LOG = '../../logs/error.log';

  // create a write stream (in append mode)
  var accessLogStream = fs.createWriteStream(path.join(__dirname, ACCESS_LOG), { flags: 'a' });

  // setup the logger
  app.use(morgan('combined', { stream: accessLogStream }));
  
  if (app.get('env') === 'development') {
    app.use(morgan('dev'));
  }

  // Error logger
  const tsFormat = () => (new Date());
  
  const logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        timestamp: tsFormat,
        colorize: true
      }),
      new (winston.transports.File)({
        filename: path.join(__dirname, ERROR_LOG),
        timestamp: tsFormat
      })
    ]
  });

  app.locals.logger = function (log, level) {
    // const logLevel = level || env === 'production' ? 'info' : 'verbose';
    logger.log('info', log);
  };
};

