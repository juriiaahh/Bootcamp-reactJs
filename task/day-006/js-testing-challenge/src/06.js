function repeatString(string, count) {
    if (count < 1) return '';
    var result = '';
    while (count > 1) {
        if (count & 1) result += string;
        count >>= 1, string += string;
    }
    return result + string;
}

module.exports = repeatString;