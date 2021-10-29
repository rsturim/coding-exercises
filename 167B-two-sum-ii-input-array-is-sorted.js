/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const result = [];
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    const needed = target - item;
    if (numbers.includes(needed)) {         
      return [i + 1, numbers.lastIndexOf(needed) + 1];
    }
  }
  return result;
};

// const numbers = [2, 7, 11, 15],
//   target = 9;
// Output: [1,2]

// const numbers = [2, 3, 4],  target = 6;
// Output: [1,3]

// const numbers = [-1, 0],
//   target = -1;
// Output: [1,2]
const numbers = [0,0,3,4], target = 0;

const result = twoSum(numbers, target);

console.log('result: ', result);
