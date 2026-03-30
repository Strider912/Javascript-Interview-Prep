/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const newArray = new Set()

    for (let key of nums){
        if(newArray.has(key)) return key
        newArray.add(key)
    }
    return -1
};

const result = findDuplicate([1,3,4,2,2])
const result2 = findDuplicate([3,1,3,4,2])
const result3 = findDuplicate([3,3,3,3,3])

console.log({result, result2, result3});

/**  Brute Force Approach

var findDuplicate = function(nums) {

  for (let i=0; i<nums.length; i++){
      for (let j=i+1; j<nums.length; j++){
        if( nums[i] ===  nums[j] ){
          return nums[i]
        }
      }
  }
};

*/