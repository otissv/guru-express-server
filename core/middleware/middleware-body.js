/*
* Body parser
* Should be placed before express.static
*/

'use strict';


const bodyParser = require('body-parser');
const methodOverride = require('method-override');


module.exports = function body (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(methodOverride());
};
