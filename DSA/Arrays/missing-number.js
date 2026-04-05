/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {

    let partialSum = 0
    let n   = nums.length
    let totalSum = n * (n+1)/2

    for(let i=0; i<nums.length; i++){
        partialSum = partialSum + nums[i]
    }

    return totalSum - partialSum
};

const result = missingNumber([3, 0, 1]);
const result2 = missingNumber([0, 1]);
const result3 = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);

console.log({ result, result2, result3 });


/*  Brute Force Approach:

var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);

  let num = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      return nums[i - 1] + 1;
    } else {
      num = nums[i] + 1;
    }
  }
  return num
};
*/