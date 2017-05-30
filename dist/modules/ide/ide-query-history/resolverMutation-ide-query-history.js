'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _lowdb = require('lowdb');

var _lowdb2 = _interopRequireDefault(_lowdb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyFile = process.cwd() + '/query-history.json';

exports.default = {
  ideQueryHistoryClear: function ideQueryHistoryClear(obj, args, context) {},
  ideQueryHistorySave: function ideQueryHistorySave(obj, args, context) {
    var db = (0, _lowdb2.default)(historyFile);

    db.defaults({ history: [] }).write();

    db.get('history').push(args).write();
  }
};
//# sourceMappingURL=resolverMutation-ide-query-history.js.map