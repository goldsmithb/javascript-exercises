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
const caesar = function(message, shift) {
  function isLowerCase(char) {
    if (char ===  char.toLowerCase()
        && char !== char.toUpperCase())
        return true;
  }
  // CharCode range of letters: 65-90, 97-122
  function isLetter(char) {
    let code = char.charCodeAt();
    if ((code >= 65 && code <= 90)
        || (code >= 97 && code <= 122))
        return true;
    else return false;
  }

  let alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let res = "";
  let alphabet;
  let index;

  for (char of message) {
    if (!isLetter(char)) {
      // skip non-letters
      res += char;
      continue;
    }
    else {
      alphabet = isLowerCase(char) ? alphabetLower : alphabetUpper;
      index = alphabet.indexOf(char);
      index = (index + shift < 0)
              ? 26 + (index + shift)
              : (index + shift) % 26;
      res += alphabet[index];
    }
  }

  return res;
};

// Do not edit below this line
module.exports = caesar;
