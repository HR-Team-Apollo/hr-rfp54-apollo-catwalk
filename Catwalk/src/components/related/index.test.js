const test = require('./testing.js');

describe('Add2', () => {
  it('should add 2 numbers together', () => {
    let result = test.add2(1, 3);
    expect(result).toBe(4);
  });
});