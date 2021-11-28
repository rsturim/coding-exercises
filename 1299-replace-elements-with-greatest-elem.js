/**
 * @param {number[]} arr
 * @return {number[]}
 */

var replaceElements = function (arr) {
  if (arr.length <= 1) return [-1];

  for (let i = 0; i < arr.length; i++) {
    let max = 0;

    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, arr[j]);
    }
    arr[i] = i === arr.length - 1 ? -1 : max;
  }

  return arr;
};

const arr = [17, 18, 5, 4, 6, 1];
// Output: [18, 6, 6, 6, 1, -1];

// const arr = [400]
// Output: [-1]

const result = replaceElements(arr);
console.log('result: ', result);
