// c = f*(9/5) + 32
// f = (x - 32) * (5/9)

const DECIMAL_PLACE = 10;

const ftoc = function(temp) {
  temp = (temp - 32) * (5/9);
  temp = Math.round(temp * DECIMAL_PLACE) / DECIMAL_PLACE;
  return temp;
};

const ctof = function(temp) {
  temp = temp * (9/5) + 32;
  temp = Math.round(temp * DECIMAL_PLACE) / DECIMAL_PLACE;
  return temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
