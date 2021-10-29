/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (target < nums[left]) return left;
  if (target > nums[right]) return right + 1;

  while (left <= right) {
    let mid = Math.ceil((left + right) / 2);
    const diff = right - left;

    if (nums[left] === target) {
      return left;
    } else if (nums[right] === target) {
      return right;
    } else if (diff === 1) {
      return target > nums[right] ? right + 1 : right;
    } else {
      if (nums[mid] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
};

const nums = [1, 3, 5, 6],
  target = 5;
// Output: 2

// const nums = [1, 3, 5, 6],
//   target = 2;
// Output: 1

// const nums = [1, 3, 5, 6],
//   target = 7;
// Output: 4

// const nums = [1, 3, 5, 6],
//   target = 0;
// Output: 0

// const nums = [1],
//   target = 0;
// Output: 0

const result = searchInsert(nums, target);
console.log('result: ', result);
