/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const result = [];
  const map = {};

  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const left = numbers[i];
    const right = numbers[j];

    if (left + right === target) {
      return [i + 1, j + 1];
    } else if (left + right > target) {
      j--;
    } else {
      i++;
    }
  }
};

const numbers = [2, 7, 11, 15],
  target = 9;
// Output: [1,2]

// const numbers = [2, 3, 4],  target = 6;
// Output: [1,3]

// const numbers = [-1, 0],
//   target = -1;
// Output: [1,2]
// const numbers = [0, 0, 3, 4], target = 0;

const result = twoSum(numbers, target);

console.log('result: ', result);
