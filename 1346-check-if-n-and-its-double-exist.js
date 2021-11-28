/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  if (arr.length === 0) return false;

  for (let i = 0; i < arr.length; i++) {
    const left = arr[i];

    for (let j = 0; j < arr.length; j++) {
      const right = arr[j];

      if (i === j) continue;

      if (2 * right === left) {
        console.log(`${left}, ${right}`);
        return true;
      }
    }
  }

  return false;
};

const arr = [10, 2, 5, 3];
// Output: true

// const  arr = [7,1,14,11];
// Output: true

// const arr = [3, 1, 7, 11];
// Output: false

// const arr = [2, 3, 3, 0, 0];
// Output: true

// const arr = [-10, 12, -20, -8, 15];
// Output: true

// const arr = [-16,-13,8];
// Output: false

// const arr = [-2,0,10,-19,4,6,-8];
// Output: false

const result = checkIfExist(arr);
console.log('result: ', result);
