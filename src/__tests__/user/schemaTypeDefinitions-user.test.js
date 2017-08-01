const test = require('ava');
const utils = require('../../utils/utils');


const readModuleFile = utils.readModuleFile;


test('Has correct user schema definitions', async (t) => {
  const actual = await readModuleFile('user/schemas/schemaTypeDefinition-user.graphql');

  const expect = `
input InputUser {
  id: String
}

type User {
  id         : String,
  created    : String,
  createdBy  : User,
  email      : String,
  endDate    : String,
  firstName  : String,
  lastLogin  : String,
  lastName   : String,
  online     : Boolean,
  roles      : [String],
  skype      : String,
  startDate  : String,
  team       : Team,
  telephone  : String,
  updated    : String,
  updatedBy  : User,
  username   : String,
  _result_   : String
}`.trim();

  t.is(actual, expect);
});
