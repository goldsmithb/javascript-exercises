/* return the sum of all integers from s to e */
const sumAll = function(s, e) {
  let sum = 0;
  for (let x = s; x <= e; x++) sum += x;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
