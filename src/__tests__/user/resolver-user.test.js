const test = require('ava');
const resolverMutations = require('../../modules/user/resolvers/resolverMutation-user');
const resolverQueries = require('../../modules/user/resolvers/resolverQuery-user.js');


test('User resolver mutations has correct method names', t => {
  const actual = Object.getOwnPropertyNames(resolverMutations.prototype)
    .filter(c => c !== 'constructor')
    .sort();
    
  const expect = [
    'create',
    'remove',
    'update'
  ];
  t.deepEqual(actual, expect);
});


test('User resolver queries has correct method names', t => {
  const actual = Object.getOwnPropertyNames(resolverQueries.prototype)
    .filter(c => c !== 'constructor')
    .sort();
    
  const expect = [
    'findAll',
    'findById'
  ];
  t.deepEqual(actual, expect);
});


test('User resolver mutations and queries do not share duplicate method names', t => {
  const mutations = Object.getOwnPropertyNames(resolverMutations.prototype)
    .filter(c => c !== 'constructor')
    .sort();
  
  const queries = Object.getOwnPropertyNames(resolverQueries.prototype)
    .filter(c => c !== 'constructor')
    .sort();
    
  const m = new Set(mutations);

  t.false(m.has(...queries));
});

