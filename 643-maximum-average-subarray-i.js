/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let max = -Infinity;

  while (end < nums.length) {
    let span = end - start + 1;
    sum += nums[end];

    if (k === span) {
      let ave = sum / k;
      max = Math.max(max, ave);
      sum -= nums[start]; // deduct trailing input, since we're advancing forward
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
