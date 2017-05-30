const test = require('ava');
const utils = require('../../utils/utils');

const readModuleFile = utils.readModuleFile;


test('Has correct user schema mutations', async (t) => {
  const actual = await readModuleFile('user/schemas/schemaMutation-user.gql');

  const expect = `
userCreate (
  id         : String,
  email      : String,
  endDate    : String,
  firstName  : String,
  lastLogin  : String,
  lastName   : String,
  roles      : [String],
  startDate  : String,
  telephone  : String,
  team       : InputTeam,
  username   : String
): User

userUpdate (
  id         : String,
  email      : String,
  endDate    : String,
  firstName  : String,
  lastLogin  : String,
  lastName   : String,
  roles      : [String],
  startDate  : String,
  team       : InputTeam
  telephone  : String,
  username   : String
): User

userRemove (
  id         : String
): User`.trim();

  t.is(actual, expect);
});
