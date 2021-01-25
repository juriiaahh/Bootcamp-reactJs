const mebiToKibi = require('../src/03');

test('convert', () =>{
    expect(mebiToKibi(2)).toBe(2048);
});