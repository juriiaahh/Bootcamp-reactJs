function leapYear(year) {
    return new Date(year, 1, 29).getDate() === 29;
  }

 module.exports =  leapYear;