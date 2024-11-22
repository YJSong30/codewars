/**
 * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
 */

/**
 * @description determines if array2 contains valid numbers that are squares of the numbers in array1
 * @param {array} array1 input array
 * @param {array} array2 input array
 * @returns true or false
 */

function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }

  const new_arr = {};
  for (let i = 0; i < array2.length; i++) {
    const num = array2[i];
    if (num in new_arr) {
      new_arr[num] += 1;
    } else {
      new_arr[num] = 1;
    }
  }

  for (let i = 0; i < array1.length; i++) {
    const squared = Math.pow(array1[i], 2);

    if (squared in new_arr && new_arr[squared] > 0) {
      new_arr[squared] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = comp;
