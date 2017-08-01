'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lowdb = require('lowdb');

var _lowdb2 = _interopRequireDefault(_lowdb);

var _constants = require('../../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  ideQueryHistoryFindAll: function ideQueryHistoryFindAll(obj, args, context) {
    var db = (0, _lowdb2.default)(_constants.QUERY_HISTORY_FILE);
    db.defaults({ history: [] }).write();
    return db.get('history').value();
  }
};
//# sourceMappingURL=resolverQuery-ide-query-history.js.map