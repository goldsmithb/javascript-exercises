const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum;
};

const multiply = function(arr) {
	let res = 1;
  for (const item of arr) {
    res *= item;
  }
  return res;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let res = 1;
	for (let i = 0; i < a; i++) {
    res *= a - i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
