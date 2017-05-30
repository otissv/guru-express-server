/*
* Schema routes
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = schemaRoute;
function schemaRoute(_ref) {
  var app = _ref.app,
      schema = _ref.schema;

  app.route('/schema').get(function (request, res) {
    return res.json({ schema: schema });
  });
}
//# sourceMappingURL=schema-route.js.map