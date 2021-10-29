/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rev = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length;

  rev(nums, 0, nums.length - 1);
  rev(nums, k, nums.length - 1);
  rev(nums, 0, k - 1);
};

const nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// const nums = [-1,-100,3,99], k = 2;
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
const result = rotate(nums, k);
console.log('result: ', result);
