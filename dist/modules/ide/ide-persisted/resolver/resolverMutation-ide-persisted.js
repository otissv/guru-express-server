'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _constants = require('../../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rm = _shelljs2.default.rm;

var fs = _bluebird2.default.promisifyAll(require('fs'));
exports.default = {
  idePersistedCollectionClear: function idePersistedCollectionClear(obj, args, context) {
    rm('-r', _constants.PERSISTED_DIRECTORY);
  },
  idePersistedCreate: function idePersistedCreate(obj, args, context) {
    var data = _extends({}, args, {
      created: new Date().toISOString()
    });

    return fs.writeFileAsync(_constants.PERSISTED_DIRECTORY + '/' + args.id + '-persisted.json', JSON.stringify(data)).then(function () {
      return {
        RESULTS_: {
          result: 'ok'
        }
      };
    }).catch(function (error) {
      console.log(error);

      return {
        RESULTS_: {
          result: 'ok',
          error: {
            type: 'QUERY_SAVE_ERROR',
            message: 'Persisted did not save'
          }
        }
      };
    });
  },
  idePersistedRemove: function idePersistedRemove(obj, args, context) {}
};
//# sourceMappingURL=resolverMutation-ide-persisted.js.map