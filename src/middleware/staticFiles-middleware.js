/*
* Application static files
*/

import express from  'express';
import compression from 'compression';
import path from 'path';


export default function staticFiles (app) {
  app.use(compression({
    filter: (req, res) => {
      return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
    },
    level: 9
  }));

  // Static files locations
  app.use(express.static(app.locals.paths.public));
};

