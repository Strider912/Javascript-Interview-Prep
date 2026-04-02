/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};

const result = missingNumber([2, 2, 1]);
const result2 = missingNumber([4, 1, 2, 1, 2]);
const result3 = missingNumber([1]);

console.log({ result, result2, result3 });

/**  Brute Force Approach:
 * 
var missingNumber = function(nums) {
    
    let  hash  = {}

    for(let i=0; i<nums.length; i++){
        if(!hash[nums[i]]){ 
             hash[nums[i]] = 1
        }else {
        hash[nums[i]]++
        }
    }

    for(let i=0; i<nums.length; i++){
        if( hash[nums[i]] === 1) return nums[i]
    }

};
 */
