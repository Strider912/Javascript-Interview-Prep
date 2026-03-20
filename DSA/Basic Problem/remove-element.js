/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
    
    let x = 0;
    for (let i=0; i<nums.length; i++){
        if(nums[i] !== val){
          nums[x]  = nums[i]
          x = x + 1;
        }
    }
    return x
};

const result = removeElement([3,2,2,3], 3)
const result1 = removeElement([0,1,2,2,3,0,4,2], 2)
console.log({result, result1});