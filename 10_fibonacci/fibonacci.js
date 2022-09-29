/*A series of numbers in which each number 
( Fibonacci number ) is the sum of the two 
preceding numbers. The simplest is the series 
1, 1, 2, 3, 5, 8, etc.
*/

const fibonacci = function(mem) {
  if (mem < 0) return "OOPS"

  let cur = prev1 = prev2 = 1;
  let temp;
  for (let i = 1; i <= mem; i++) {
    if (i === 1 || i === 2) cur = 1;
    else {
      cur = prev1 + prev2;
      temp = cur;
      prev2 = prev1;
      prev1 = temp;
    }
  }
  return cur;

};

// Do not edit below this line
module.exports = fibonacci;
