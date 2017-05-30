'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                  * Application environment variables,
                                                                                                                                                                                                                                                                  */

exports.default = environment;

var _getEnv = require('get-env');

var _getEnv2 = _interopRequireDefault(_getEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Export environment variables
*/
var ENV = (0, _getEnv2.default)();

function env(config) {
  switch (ENV) {
    case 'dev' || 'development':
      return config.development;
    case 'staging':
      return config.staging;
    case 'prod' || 'production':
      return config.production;
    default:

      throw new Error('Unknown exception Environment:');
  }
};

/*
  *Application variables
  */
function environment(_ref) {
  var app = _ref.app,
      config = _ref.config;

  app.locals = _extends({}, app.locals, env(config), {
    paths: {
      views: process.cwd() + '/server/views',
      public: process.cwd() + '/public/'
    }
  });
};
//# sourceMappingURL=environment.js.map