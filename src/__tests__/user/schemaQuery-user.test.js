const test = require('ava');
const utils = require('../../utils/utils');

const readModuleFile = utils.readModuleFile;


test('Has correct user schema queries', async (t) => {
  const actual = await readModuleFile('user/schemas/schemaQuery-user.graphql');

  const expect = `
userFindAll (
  id:          String, 
  created:     String,
  createdBy:   InputUser,
  dateOfBirth: String,
  email:       String,
  endDate:     String,
  firstName:   String,
  lastLogin:   String,
  lastName:    String,
  online:      Boolean,
  roles:       String,
  startDate:   String,
  team:        InputTeam,
  telephone:   String,
  updated:     String,
  updatedBy:   InputUser,
  username:    String
): [User]


userFindById (
  id: String
): User


userFindByUsername (
  username: String
): User


userFindIdByUsername (
  username: String
): User


userFindByFilter (
  id         : String,
  created    : String,
  createdBy  : String,
  dateOfBirth: String,
  email      : String,
  endDate    : String,
  firstName  : String,
  lastLogin  : String,
  lastName   : String,
  notes      : String,
  online     : Boolean,
  roles      : String,
  skype      : String,
  team       : String,
  telephone  : String,
  updated    : String,
  updatedBy  : String,
  username   : String
) : [User]
`.trim();

  t.is(actual, expect);
});
