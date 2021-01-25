const charLength = require('../src/01');

test('return length of input', () =>{
    expect(charLength('task')).toBe(4);
});