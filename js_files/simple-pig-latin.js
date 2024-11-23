/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 */

/**
 *
 * @param {string} str input string
 * @returns pig latin form of string
 */
function pigIt(str) {
  //Code here
  const split_string = str.split(" ");
  const result = [];

  for (let i = 0; i < split_string.length; i++) {
    const word = split_string[i];
    const match = word.match(/^([a-zA-Z]+)([^\w]*)$/);

    if (match) {
      const main_word = match[1];
      const punctuation = match[2];
      const rest_of_word = main_word.slice(1);
      const new_string = rest_of_word + word[0] + "ay" + punctuation;

      result.push(new_string);
    } else {
      result.push(word);
    }
  }

  return result.join(" ");
}

module.exports = pigIt;
