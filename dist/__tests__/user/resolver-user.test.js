'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var test = require('ava');
var resolverMutations = require('../../modules/user/resolvers/resolverMutation-user');
var resolverQueries = require('../../modules/user/resolvers/resolverQuery-user.js');

test('User resolver mutations has correct method names', function (t) {
  var actual = Object.getOwnPropertyNames(resolverMutations.prototype).filter(function (c) {
    return c !== 'constructor';
  }).sort();

  var expect = ['create', 'remove', 'update'];
  t.deepEqual(actual, expect);
});

test('User resolver queries has correct method names', function (t) {
  var actual = Object.getOwnPropertyNames(resolverQueries.prototype).filter(function (c) {
    return c !== 'constructor';
  }).sort();

  var expect = ['findAll', 'findById'];
  t.deepEqual(actual, expect);
});

test('User resolver mutations and queries do not share duplicate method names', function (t) {
  var mutations = Object.getOwnPropertyNames(resolverMutations.prototype).filter(function (c) {
    return c !== 'constructor';
  }).sort();

  var queries = Object.getOwnPropertyNames(resolverQueries.prototype).filter(function (c) {
    return c !== 'constructor';
  }).sort();

  var m = new Set(mutations);

  t.false(m.has.apply(m, _toConsumableArray(queries)));
});
//# sourceMappingURL=resolver-user.test.js.map