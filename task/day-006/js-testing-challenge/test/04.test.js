const leapYear = require('../src/04');

test('tahun kabisat', () =>{
    expect(leapYear(2020)).toBe(true);
});