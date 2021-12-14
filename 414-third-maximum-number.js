/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const sortedNums = nums.sort((a, b) => b - a);

  let thirdMax = -Infinity;
  let count = 0;
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    const prev = nums[j];
    const item = nums[i];
    if (item !== prev) {
      count++;
    }
    if (count === 2) {
      return item;
    }
    j++;
  }

  if (thirdMax === -Infinity) return sortedNums[0];
};

const nums = [3, 2, 2, 2, 1, 0];
// Output: 1

// const nums = [1, 2];
// Output: 2

// const nums = [2,2,3,1];
// Output: 1

const result = thirdMax(nums);
console.log('result: ', result);
