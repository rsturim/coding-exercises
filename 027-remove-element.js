/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     const item = nums[i];
//     if (item === val) {
//       nums[i] = '_';
//     }
//   }

//   let anchor = 0;

//   for (let explorer = 0; explorer < nums.length; explorer++) {
//     if (nums[explorer] !== '_') {
//       [nums[anchor], nums[explorer]] = [nums[explorer], nums[anchor]];
//       console.log('explorer: ', explorer);
//       console.log('anchor: ', anchor);
//       anchor++;
//     }
//     console.log('------------------------------------------');
//   }
//   return anchor;
// };

var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  console.log('nums: ', nums);
  return i;
};

const nums = [3, 2, 2, 3];
const val = 3;
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// const nums = [0, 1, 2, 2, 3, 0, 4, 2];
// const val = 2;
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const result = removeElement(nums, val);
console.log('result: ', result);
