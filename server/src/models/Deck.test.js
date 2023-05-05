const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const db = require('../db/config')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'cowboys', xp: 1000})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

describe('Deck', () => {
    it('has a name of cowboys and xp of 1000', async () => {
        expect(Deck.name).toBe('cowboys'),
        expect(Deck.xp).toBe(1000)
    })
})

})