const findMaxSum = (arr, k) => {
  let maxSum = -Infinity;
  let sum = 0;

  let i = 0;
  let j = 0;

  while (j < arr.length) {
    left = arr[i];
    console.log(`left ${i}: `, left);
    right = arr[j];
    console.log(`right ${j}: `, right);
    // console.log('sum: ', sum);
    // console.log('------------------------------------------');

    // maxSum = Math.max(left + right, maxSum);
    let windowSize = Math.abs(right - left) + 1;
    console.log('windowSize: ', windowSize);

    if (i === j) {
      sum = left + right;
      j++;
    } else if (windowSize < k) {
      sum = sum + right - left;
      j++;
    } else if (windowSize === k) {
      j++;
      sum = sum + arr[j];
      //   i++;
    } else {
      sum = sum + arr[j] - left;
      i++;
    }

    console.log('sum: ', sum);
    maxSum = Math.max(sum, maxSum);
    console.log('maxSum: ', maxSum);
    console.log('------------------------------------------');
  }

  return maxSum;
};

const arr = [2, 3, 4, 1, 5];
const k = 3;

const result = findMaxSum(arr, k);

console.log('result: ', result);
