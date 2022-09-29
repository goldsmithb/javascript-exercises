/*
'ABC'.charCodeAt(0)  // returns 65
'ZYX'.charCodeAt(0)  // returns 90
'abc'.charCodeAt(0)  // returns 97
'zyx'.charCodeAt(0)  // returns 122
*/
/* write a function that takes a string to be encoded 
 * and a shift factor and then returns the encoded string
 * e.g. : caesar('A', 1) // simply shifts the letter by 1: 
 *        returns 'B'

*/

// problem: ignore non-letters
// problem: shift in a circle ('z' shifted 2 should be 'b')
const caesar = function(message, shift) {
  function isLowerCase(char) {
    if (char ===  char.toLowerCase()
        && char !== char.toUpperCase())
        return true;
  }

  let alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let res = "";
  let index;

  for (char of message) {
    if (isLowerCase(char)) {
      index = alphabetLower.indexOf(char);
      res += alphabetLower[(index % 27) + shift];
    }
    else {
      index = alphabetUpper.indexOf(char);
      res += alphabetUpper[(index % 27) + shift];
    }
  }

  return res;
};

// Do not edit below this line
module.exports = caesar;
