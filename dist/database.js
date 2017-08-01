'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = databaseConnections;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
* Database connections
*/

function databaseConnections(_ref) {
  var databases = _ref.databases,
      config = _ref.config;

  if (databases == null) return null;

  var db = databases.databases;

  return Object.keys(db).reduce(function (previousObj, currentKey) {
    if (currentKey === 'default') return previousObj;
    var options = config[currentKey];

    return _extends({}, previousObj, _defineProperty({}, currentKey, db[currentKey].connect(options)));
  }, {});
}
//# sourceMappingURL=database.js.map