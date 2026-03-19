/**
 * @param {number} num
 * @return {boolean}
 */

const isPalindrome = function (num) {
  if (num < 0) return false;

  let originalNum = num;
  let reverse = 0;

  while (num > 0) {
    let rem = num % 10;
    reverse = (10 * reverse) + rem;
    num = Math.floor(num / 10)
  }

  return originalNum === reverse;
};

const result1 =  isPalindrome(121)
const result2 = isPalindrome(-121)
const result3 = isPalindrome(10)

console.log({result1, result2, result3 });