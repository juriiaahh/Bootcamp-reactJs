const charLength = require('./charLength');

test('return length of input', () =>{
    expect(charLength('refactory')).toBe(9);
});