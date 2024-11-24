/**
 * Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []
Input strings will only contain letters. Note: keep the original order of the names in the output.

 */

/**
 * @description returns a list of friends. a friend is length of 4
 * @param {array} friends input array
 * @returns list of friends
 */
function friend(friends) {
  //your code here
  const filtered_friends = friends.filter((friend) => {
    if (friend.length === 4) {
      return friend;
    }
  });

  return filtered_friends;
}

module.exports = friend;
