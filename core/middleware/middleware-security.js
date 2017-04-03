/*
* Application security
*/

'use strict';

const helmet = require('helmet');
const cors = require('cors');


module.exports = function security (app) {
  app.disable('x-powered-by');

  // add localhost to white list
  const appWhitelist = app.locals.whitelist ? app.locals.whitelist : [];
  const localHosts = Array.apply(null, {length: 9999}).map(Number.call, Number => `http://localhost:${Number}`);

  let whitelist = [
    ...appWhitelist,
    ...localHosts
  ];

  const corsOptions = {
    origin: function (origin, callback) {
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
    }
  };

  app.use(cors(corsOptions));

  // pre-flight
  app.options('*', cors(corsOptions));


  // Content Security Policy
  if (app.get('env' !== 'development')) {
    app.use(helmet.csp({
      defaultSrc: ['self'],
      scriptSrc: ['*.google-analytics.com'],
      styleSrc: ['unsafe-inline'],
      imgSrc: ['*.google-analytics.com'],
      connectSrc: ['none'],
      fontSrc: [],
      objectSrc: [],
      mediaSrc: [],
      frameSrc: []
    }));
  }


  app.use(helmet.xssFilter());
  app.use(helmet.frameguard());
  app.use(helmet.hsts({
    maxAge: 7776000000,
    includeSubdomains: true
  }));
  app.use(helmet.noSniff());
  app.use(helmet.ieNoOpen());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.dnsPrefetchControl());
  // app.use(require('express-enforces-ssl'));
  // app.use(helmet.hpkp({
  //   maxAge: ninetyDaysInMilliseconds,
  //   sha256s: ['AbCdEf123=', 'ZyXwVu456='],
  //   includeSubdomains: true,         // optional
  //   reportUri: 'http://example.com'  // optional
  //   reportOnly: false,               // optional
  //
  //   // Set the header based on a condition.
  //   // This is optional.
  //   setIf: function (req, res) {
  //     return req.secure
  //   }
  // }))
};
