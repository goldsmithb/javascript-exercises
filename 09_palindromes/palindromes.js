// determine if a string is a palindrome
// Recursive solution
const palindromes = function (str) {
  // clean input - normalize caps, remove any punctuation
  str = str.toLowerCase();
  // from: https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
  str = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
  str = str.replace(' ', '');

  // Base cases
  if (str.length === 2) {
    return (str[0] === str[1]) ? true : false;
  }
  else if (str.length === 3) {
    return (str[0] === str[2]) ? true : false;
  }
  // recursion
  if (str[0] !== str[str.length - 1]) 
  {
    return false;
  }
  else {
    return palindromes(str.slice(1, -1));
  }
};

// Do not edit below this line
module.exports = palindromes;
