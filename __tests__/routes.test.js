const test = require('ava');
const axios = require('axios');

test('has index routes', async (t) => {
  const actual = await axios.get('http://localhost:8000');
  
  const expect = 200;

  t.is(actual.status, expect);
});
