/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let numsEven = 0;

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item.toString().length % 2 === 0) {
      numsEven += 1;
    }
  }
  return numsEven;
};

// const nums = [12, 345, 2, 6, 7896];
// Output: 2

const nums = [555,901,482,1771]
// Output: 1

const result = findNumbers(nums);
console.log('result: ', result);
