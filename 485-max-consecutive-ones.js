/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item === 1) {
      counter += 1;
      if (counter > maxCount) {
        maxCount = counter;
      }
    } else {
      counter = 0;
    }
  }
  return maxCount;
};

const nums = [1, 1, 0, 1, 1, 1];
// Output: 3

// const nums = [1,0,1,1,0,1];
// Output: 2

const result = findMaxConsecutiveOnes(nums);
console.log('result: ', result);
