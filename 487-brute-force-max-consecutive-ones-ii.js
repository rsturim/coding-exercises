/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let longestSequence = 0;

  for (let left = 0; left < nums.length; left++) {
    let zCount = 0;

    for (let right = left; right < nums.length; right++) {
      if (nums[right] === 0) {
        zCount++;
      }

      if (zCount < 2) {
        longestSequence = Math.max(longestSequence, right - left + 1);
      }
    }
  }

  return longestSequence;
};

// const nums = [1,0,1,1,0]
// Output: 4

// const nums = [1,0,1,1,0,1]
// Output: 4

// const nums = [1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0];
// Output: 7

const nums = [1, 0, 1, 0, 1, 1, 1, 1];
// Output: 6

const result = findMaxConsecutiveOnes(nums);
console.log('result: ', result);
