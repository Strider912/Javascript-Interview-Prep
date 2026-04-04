/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
  return nums;
};

const reverse = (nums, start, end) => {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

const result = rotate([1, 2, 3, 4, 5, 6, 7], 3);
const result2 = rotate([-1, -100, 3, 99], 2);
console.log({ result, result2 });

/**  
 * Array = [1, 2, 3, 4];
 * k = 6 => length % k => 4 % 6 => 2
 * 
  Step 1: Reverse Complete Array
 [1,2,3,4] => [4,3,2,1]

 Step 2: Reverse only first k part of array
 [4,3,2,1] => [3,4,2,1]

 Step 3: Reverse only after k elements
 [3,4,2,1] => [3,4,1,2]
*/
