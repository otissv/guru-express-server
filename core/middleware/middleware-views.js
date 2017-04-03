'use strict';

const path = require('path');
const exphbs = require('express-handlebars');

// const hbs = exphbs.create({
//   defaultLayout: 'main',
//   partialsDir: ['server/views']
// });


module.exports = function views (app) {
  app.set('views', path.join(__dirname, '../../views'));
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../../views')
  }));
  app.set('view engine', '.hbs');

};
