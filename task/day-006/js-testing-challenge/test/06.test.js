const repeatString = require('../src/06');

test('repeat String', () =>{
    expect(repeatString('Makan! ', 3)).toBe("Makan! Makan! Makan! ");
});