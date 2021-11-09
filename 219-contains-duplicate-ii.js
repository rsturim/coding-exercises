/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let sofar = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (Math.abs(i - sofar[num]) <= k) {
      return true;
    } else {
      sofar[num] = i;
    }
  }
  return false;
};

const nums = [1, 2, 3, 1];
const k = 3;
// Output: true

// const nums = [1, 0, 1, 1];
// const k = 1;
// Output: true

// const nums = [1, 2, 3, 1, 2, 3];
// const k = 2;
// Output: false

// const nums = [0, 1, 2, 3, 2, 5];
// const k = 3;
// Output: true

const result = containsNearbyDuplicate(nums, k);
console.log('result: ', result);
