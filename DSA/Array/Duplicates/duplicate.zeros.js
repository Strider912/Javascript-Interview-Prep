/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    const newArr = []
    for(let i=0; i<nums.length; i++){
      newArr.push(nums[i])
      if(nums[i] === 0) newArr.push(0)
    }
  for (let j=0; j<nums.length; j++){
      nums[j] = newArr[j]
  }
  return nums
};

const result = containsNearbyAlmostDuplicate([1,0,2,3,0,4,5,0])
const result2 = containsNearbyAlmostDuplicate([1,2,3])
console.log({result, result2});