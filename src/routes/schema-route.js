/*
* Schema routes
*/
'use strict';

export default function schemaRoute ({ app, schema }) {
  app.route('/schema').get((request, res) => {
    return res.json({ schema });
  });
}
