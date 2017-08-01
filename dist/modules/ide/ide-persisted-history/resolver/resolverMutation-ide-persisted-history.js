'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _lowdb = require('lowdb');

var _lowdb2 = _interopRequireDefault(_lowdb);

var _constants = require('../../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = _bluebird2.default.promisifyAll(require('fs'));

exports.default = {
  idePersistedHistoryClear: function idePersistedHistoryClear(obj, args, context) {
    var db = (0, _lowdb2.default)(_constants.PERSISTED_HISTORY_FILE);
    db.set({ history: [] }).write();

    fs.writeFileAsync(_constants.PERSISTED_HISTORY_FILE, '{\n  "history": [] \n}');
    return [];
  },
  idePersistedHistorySave: function idePersistedHistorySave(obj, args, context) {
    var db = (0, _lowdb2.default)(_constants.PERSISTED_HISTORY_FILE);

    db.defaults({ history: [] }).write();
    db.get('history').push(args).write();
  }
};
//# sourceMappingURL=resolverMutation-ide-persisted-history.js.map