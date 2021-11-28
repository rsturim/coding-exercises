/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const result = [];

  for (let i = 0; result.length < arr.length; i++) {
    const item = arr[i];
    if (item === 0) {
      result.push(item);
      result.push(item);
    } else {
      result.push(item);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = result[i];
  }
};


const arr = [1, 0, 2, 3, 0, 4, 5, 0];
// Output: [1,0,0,2,3,0,0,4]

// const arr = [1, 2, 3];
// Output: [1,2,3]

duplicateZeros(arr);
console.log('arr: ', arr);

// console.log('result: ', result);
