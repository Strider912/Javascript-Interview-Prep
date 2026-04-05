/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
};

const result = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log({ result, result2, result3 });

/** Brute Force Approach  
 * 
var lengthOfLastWord = function (s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
};
*/
