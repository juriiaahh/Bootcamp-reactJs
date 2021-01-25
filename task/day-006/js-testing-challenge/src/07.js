const repeatLetter = (str, n) => {
   let res = '';
   for(let i = 0; i < str.length; i++){
      res += str[i].repeat(n);
   };
   return res;
};

module.exports = repeatLetter;