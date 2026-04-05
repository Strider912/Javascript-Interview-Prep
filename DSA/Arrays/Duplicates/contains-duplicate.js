/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    nums.sort((a,b)=> a-b)

    for (let i=1; i<nums.length; i++){
        if( nums[i] === nums[i-1] ) return true
    }   
    return false
};

const result = containsDuplicate([1,2,3,1])
const result2 = containsDuplicate([1,2,3,4])

console.log({result, result2});