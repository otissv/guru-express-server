import path from 'path';
import exphbs from 'express-handlebars';


export default function views (app) {
  const VIEWS = app.locals.paths.views;

  app.set('views', VIEWS);
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: VIEWS
  }));

  app.set('view engine', '.hbs');
};
