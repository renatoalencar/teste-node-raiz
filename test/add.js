const { expect } = require('chai')
const add = require('../add')

describe('add function', () => {
  it('should sum two numbers', () => {
    expect(add(1, 2)).to.equal(3)
  })
})
