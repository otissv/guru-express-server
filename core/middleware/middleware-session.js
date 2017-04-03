/*
*Application session
*/

'use strict';

const csrf = require('csurf');
const cookieParser = require('cookie-parser');

module.exports = function session (app, mongoose) {
  app.use(cookieParser());
  // CSRF
  app.use(csrf());

  app.use((req, res, next) => {
    const token = req.csrfToken();

    res.cookie('XSRF-TOKEN', token);
    next();
  });
};
