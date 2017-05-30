'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lowdb = require('lowdb');

var _lowdb2 = _interopRequireDefault(_lowdb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyFile = process.cwd() + '/query-history.json';

exports.default = {
  ideQueryHistoryFindAll: function ideQueryHistoryFindAll(obj, args, context) {
    var db = (0, _lowdb2.default)(historyFile);
    return db.get('history').value();
  }
};
//# sourceMappingURL=resolverQuery-ide-query-history.js.map