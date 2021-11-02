/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const solution = [];

  const multiplier = (arr) => {
    console.log('arr: ', arr);
    return arr.reduce((item, acc) => {
      return item === 0 ? 0 : acc * item;
    }, 1);
  };

  let counter = 0;

  for (let index = 0; index < nums.length; index++) {
    const miniArr = nums.filter((item, idx) => {
      if (idx !== index) {
        return nums[index];
      }
    });
    const sum = multiplier(miniArr);
    solution.push(sum);
  }

  return solution;
};

// let nums = [1,2,3,4];
let nums = [-1, 1, 0, -3, 3];
const result = productExceptSelf(nums);

console.log('result: ', result);
