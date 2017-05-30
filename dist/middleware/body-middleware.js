'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = body;

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Body parser
* Should be placed before express.static
*/

function body(app) {
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: false }));
  app.use((0, _methodOverride2.default)());
};
//# sourceMappingURL=body-middleware.js.map