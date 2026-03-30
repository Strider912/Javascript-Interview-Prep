/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDuplicates = function(nums) {
    const duplicateArray =[]
    const newArray = new Set()

  for (let key of nums ){
    if(newArray.has(key)) duplicateArray.push(key)
      newArray.add(key)
  }

  return duplicateArray
};

const result = findDuplicates([4,3,2,7,8,2,3,1])
const result2 = findDuplicates([1,1,2])
const result3 = findDuplicates([1])

console.log({result, result2, result3});

/** Brute Force Approach

var findDuplicates = function(nums) {
    const duplicateArray =[]

  for (let i=0; i<nums.length; i++){
    for (let j=i+1; j<nums.length; j++){
        if(nums[i] === nums[j] ){
            duplicateArray.push(nums[i])
        }
    }
  }
    return duplicateArray
};
 */



/** Second Solution

var findDuplicates = function(nums) {
   const result = [];

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;

        if (nums[index] < 0) {
            result.push(index + 1);
        } else {
            nums[index] = -nums[index];
        }
    }

    return result;
};


| i | nums[i] (raw) | abs(nums[i]) | index = abs-1 | nums[index] before | nums[index] < 0 ? | Action Taken                 | Result Array | Updated nums            |
| - | ------------- | ------------ | ------------- | ------------------ | ----------------- | ---------------------------- | ------------ | ----------------------- |
| 0 | 4             | 4            | 3             | 7                  | ❌ No              | Mark negative → nums[3] = -7 | []           | [4,3,2,-7,8,2,3,1]      |
| 1 | 3             | 3            | 2             | 2                  | ❌ No              | Mark negative → nums[2] = -2 | []           | [4,3,-2,-7,8,2,3,1]     |
| 2 | -2            | 2            | 1             | 3                  | ❌ No              | Mark negative → nums[1] = -3 | []           | [4,-3,-2,-7,8,2,3,1]    |
| 3 | -7            | 7            | 6             | 3                  | ❌ No              | Mark negative → nums[6] = -3 | []           | [4,-3,-2,-7,8,2,-3,1]   |
| 4 | 8             | 8            | 7             | 1                  | ❌ No              | Mark negative → nums[7] = -1 | []           | [4,-3,-2,-7,8,2,-3,-1]  |
| 5 | 2             | 2            | 1             | -3                 | ✅ Yes             | Duplicate found → push 2     | [2]          | [4,-3,-2,-7,8,2,-3,-1]  |
| 6 | -3            | 3            | 2             | -2                 | ✅ Yes             | Duplicate found → push 3     | [2,3]        | [4,-3,-2,-7,8,2,-3,-1]  |
| 7 | -1            | 1            | 0             | 4                  | ❌ No              | Mark negative → nums[0] = -4 | [2,3]        | [-4,-3,-2,-7,8,2,-3,-1] |

*/
