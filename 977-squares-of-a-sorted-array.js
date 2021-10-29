/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // cheap way
  // return nums.map(n => n ** 2).sort((a,b) => a - b);

  const result = new Array(nums.length).fill('_');
  let i = 0;
  let j = nums.length - 1;
  let rIdx = nums.length - 1;
  while (i <= j) {
    let left = nums[i] ** 2;
    let right = nums[j] ** 2;

    if (right >= left) {
      result[rIdx] = right;
      j--;
    } else {
      result[rIdx] = left;
      i++;
    }
    rIdx--;
  }

  return result;
};

const nums = [-4, -1, 0, 3, 10];
// Output: [0,1,9,16,100]

// const nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

const result = sortedSquares(nums);
console.log('result: ', result);
