'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lowdb = require('lowdb');

var _lowdb2 = _interopRequireDefault(_lowdb);

var _constants = require('../../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  idePersistedHistoryFindAll: function idePersistedHistoryFindAll(obj, args, context) {
    var db = (0, _lowdb2.default)(_constants.PERSISTED_HISTORY_FILE);
    if (db.source !== _constants.PERSISTED_HISTORY_FILE) {
      db.defaults({ history: [] }).write();
      return { history: [] };
    } else {
      return db.get('history').value();
    }
  }
};
//# sourceMappingURL=resolverQuery-ide-persisted-history.js.map