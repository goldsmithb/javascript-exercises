const reverseString = function(str) {
  const chars = str.split('');
  let len = chars.length;
  let res = "";
  for (let i = 1; i <= len; i++)
    res += chars[len - i];
  return res;
};

/* Learned:
    JS indexes are positive integers. 
    Negative indeces return undefined values

*/

// Do not edit below this line
module.exports = reverseString;
