/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let wentup = false;
  let wentdown = false;

  let i = 1;

  while (arr[i] > arr[i - 1]) {
    wentup = true;
    // console.log('up i: ', i);
    i++;
  }
  //   console.log('wentup: ', wentup);

  if (arr[i] === arr[i + 1]) return false;

  while (arr[i - 1] > arr[i]) {
    wentdown = true;
    // console.log('down i: ', i);
    i++;
  }

  //   console.log('arr.length === i: ', arr.length === i);
  //   console.log('wentdown: ', wentdown);

  return wentup && wentdown && arr.length === i;
};

// const arr = [2,1];
// Output: false

// const arr = [3, 5, 5];
// Output: false

// const arr = [0, 3, 2, 1];
// Output: true

const arr = [-4, -2, 1, 5, 6, 4, 0, -1, -100];
// Output: true

// const arr = [0,2,3,3,5,2,1,0];
// Output: false

// const arr = [0, 1, 2, 1, 2];
// Output: false

// const arr = [2, 0, 2];
// Output: false

const result = validMountainArray(arr);
console.log('result: ', result);
