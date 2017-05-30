/*
*Application session
*/

import csrf from 'csurf';
import cookieParser from 'cookie-parser';

export default function session (app) {
  app.use(cookieParser());
  // CSRF
  app.use(csrf());

  app.use((req, res, next) => {
    const token = req.csrfToken();

    res.cookie('XSRF-TOKEN', token);
    next();
  });
};
