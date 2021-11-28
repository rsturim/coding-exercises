/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let anchor = 0;
  let explorer = 1;

  if (nums.length === 0) return 0;

  while (explorer < nums.length) {
    if (nums[anchor] === nums[explorer]) {
      explorer++;
    } else {
      anchor++;
      nums[anchor] = nums[explorer];
    }
  }
  return anchor + 1;
};

// const nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

const nums = [1,2];
const result = removeDuplicates(nums);
console.log('nums: ', nums);

console.log('result: ', result);
