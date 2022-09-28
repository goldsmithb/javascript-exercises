const removeFromArray = function(arr, ...delItems) {
  // for each item to delete,
  for (const item of delItems) {
    // traverse the entire array and
    for (let i = 0; i < arr.length; i++) {
      // remove all instances of the item
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

/*
 * What I learned:
 * Rest parameters:
    * A function definition's last parameter can be prefixed with ... 
    * (three U+002E FULL STOP characters), which will cause all remaining 
    * (user supplied) parameters to be placed within a standard JavaScript 
    * array. Only the last parameter in a function definition can be a rest 
    * parameter.
  * Using splice to remove array elements without leaving holes
 * */

// Do not edit below this line
module.exports = removeFromArray;