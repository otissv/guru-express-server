/*
* Application routes
*/

'use strict';
module.exports = function routes ({ app, context }) {
  app.route('*').get((req, res) => {
    return res.render('index', { title: 'GraphQL Fake' });
  });

  app.route('/').get((req, res) => {
    return res.status(403).send('403 Forbidden');
  });
};
