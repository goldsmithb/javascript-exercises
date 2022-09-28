/* return the sum of all integers from s to e */
const sumAll = function(a, b) {
  // set start and end for range
  let start, end;
  if (b > a) start = a, end = b;
  else start = b, end = a;
  let sum = 0;
  for (let x = start; x <= end; x++) sum += x;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
