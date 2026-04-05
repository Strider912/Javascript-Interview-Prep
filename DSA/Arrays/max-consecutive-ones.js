/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let currentCount = 0
    let maxCount = 0

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            currentCount++
        } else {
            maxCount = Math.max(currentCount, maxCount)
            currentCount=0
        }   
    }
    return maxCount = Math.max(currentCount, maxCount)
};

const result = findMaxConsecutiveOnes([1,1,0,1,1,1])
const result2 = findMaxConsecutiveOnes([1,0,1,1,0,1])

console.log({result, result2 });