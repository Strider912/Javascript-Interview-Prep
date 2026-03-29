/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    const newArray = new Set()
    const duplicateArray = []

    for(key of nums){
        if(newArray.has(key)) duplicateArray.push(key)
         newArray.add(key)
    }
    return duplicateArray
};

const result = findDuplicates([4,3,2,7,8,2,3,1])
const result2 = findDuplicates([1,1,2])
const result3 = findDuplicates([1])
console.log({result, result2, result3});