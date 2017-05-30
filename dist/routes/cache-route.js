'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Resolver cache
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _utils = require('../utils');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = function () {
  function Cache() {
    _classCallCheck(this, Cache);

    this.data = {};
  }

  _createClass(Cache, [{
    key: 'add',
    value: function add(_ref) {
      var key = _ref.key,
          value = _ref.value;

      this.data = _extends({}, this.data, _defineProperty({}, key, value));
      return value;
    }
  }, {
    key: 'addMany',
    value: function addMany(_ref2) {
      // this.data = { ...this.data, [key]: value };
      // return value;

      var key = _ref2.key,
          value = _ref2.value;
    }
  }, {
    key: 'load',
    value: function load(_ref3) {
      var key = _ref3.key;

      return this.data[key];
    }
  }, {
    key: 'loadMany',
    value: function loadMany(_ref4) {
      // return this.data[key];

      var key = _ref4.key;
    }
  }, {
    key: 'remove',
    value: function remove(_ref5) {
      var key = _ref5.key;

      this.data = (0, _utils.cleanObj)(_extends({}, this.data, _defineProperty({}, key, null)));
    }
  }, {
    key: 'removeMany',
    value: function removeMany(_ref6) {
      // this.data = cleanObj({ ...this.data, [key]: null });

      var key = _ref6.key;
    }
  }, {
    key: 'store',
    value: function store() {
      return this.data;
    }
  }]);

  return Cache;
}();

exports.default = Cache;
//# sourceMappingURL=cache-route.js.map