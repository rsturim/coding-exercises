/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function (nums) {
  const result = new Array(nums.length).fill('_');

  let l = 0;
  let r = nums.length - 1;

  let idx = nums.length - 1;

  while (l <= r) {
    let left = nums[l] ** 2;
    let right = nums[r] ** 2;

    if (left > right) {
      result[idx] = left;
      l++;
    } else {
      result[idx] = right;
      r--;
    }
    idx--;
  }

  return result;
};

const nums = [-4, -1, 0, 3, 10];
// Output: [0,1,9,16,100]

// const nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const result = sortedSquares(nums);
console.log('result: ', result);
