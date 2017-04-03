/*
* Application static files
*/

'use strict';
 
const compression = require('compression');
const path = require('path');


module.exports = function staticFiles (app, express) {
  app.use(compression({
    filter: (req, res) => {
      return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
    },
    level: 9
  }));

  // Static files locations
  app.use(express.static(path.join(__dirname, '../../public/')));
};

