/**
 * Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
 */

/**
 * @description finds first non-repeating character
 * @param {string} str input string
 * @returns {string} returns first letter that doesn't repeat
 */

function firstNonRepeatingCharacter(s) {
  /**
   * 1. get counts of characters in string - hashmap
   * 2. get all single count ones
   * 3. find indexes of single count ones
   * 4. return lowest index of single count ones
   */

  const counts = {};
  const lowerCaseMap = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();

    if (char in counts) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
      lowerCaseMap[char] = s[i];
    }
  }

  for (const char of s) {
    if (counts[char.toLowerCase()] === 1) {
      return char;
    }
  }

  return "";
}

// const hm = new Map();
// const counts = {}
// for (let i = 0; i < str.length; i++) {
//   const current = str[i];
//   if (hm.has(current)) hm.set(hm.get(current) + 1);
//   else hm.set(current, 1);
// if(current in counts) ++counts[current]
// else counts[current] = 1

// console.log("hm =", hm);
// ['s', 't', 'r', 'e', 's', 's']
// let counts = str.split("").reduce(
//   (acc, curr) => ({
//     ...acc,
//     [curr]: acc[curr] ? ++acc[curr] : 1,
//   }),
//   {}
// );

// console.log("counts =", counts);

const shouldReturnT = firstNonRepeatingCharacter("stress");

console.log("shouldReturnT =", shouldReturnT);

module.exports = firstNonRepeatingCharacter;
