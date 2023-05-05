const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const  {db} = require('../db/config')

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sequelize.sync({ force: true })
  user = await User.create({ username: 'Penelope' })
});

// clear db after tests
afterAll(async () => await db.sequelize.sync({ force: true }));

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  });

describe('User', () => {
  it('has a username called Penelope', async () => {
    expect(user.username).toBe('Penelope')
  });
});
 
});
