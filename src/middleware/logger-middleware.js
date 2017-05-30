/*
* Application logger
*/

import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import winston from 'winston';

const dest = `${process.cwd()}/logs`;

export default function logger (app) {
  const ACCESS_LOG = `${dest}/access.log`;
  const ERROR_LOG = `${dest}/error.log`;

  // create a write stream (in append mode)
  let accessLogStream = fs.createWriteStream(ACCESS_LOG, { flags: 'a' });

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

