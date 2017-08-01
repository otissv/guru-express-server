'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var test = require('ava');
var utils = require('../../utils/utils');

var readModuleFile = utils.readModuleFile;

test('Has correct user schema definitions', function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(t) {
    var actual, expect;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readModuleFile('user/schemas/schemaTypeDefinition-user.graphql');

          case 2:
            actual = _context.sent;
            expect = '\ninput InputUser {\n  id: String\n}\n\ntype User {\n  id         : String,\n  created    : String,\n  createdBy  : User,\n  email      : String,\n  endDate    : String,\n  firstName  : String,\n  lastLogin  : String,\n  lastName   : String,\n  online     : Boolean,\n  roles      : [String],\n  skype      : String,\n  startDate  : String,\n  team       : Team,\n  telephone  : String,\n  updated    : String,\n  updatedBy  : User,\n  username   : String,\n  _result_   : String\n}'.trim();


            t.is(actual, expect);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=schemaTypeDefinitions-user.test.js.map