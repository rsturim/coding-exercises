/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
  let start = 0;
  let end = 0;
  let sofar = 0;
  let max = -Infinity;

  while (end < nums.length) {
    sofar += nums[end];
    if (end - start === k - 1) {
      let ave = sofar / k;
      max = Math.max(max, ave);
      sofar -= nums[start];
      start++;
    }
    end++;
  }

  return max;
};

const nums = [1, 12, -5, -6, 50, 3],
  k = 4;
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// const nums = [5],
//   k = 1;
// Output: 5.00000

const result = findMaxAverage(nums, k);

console.log('result: ', result);
