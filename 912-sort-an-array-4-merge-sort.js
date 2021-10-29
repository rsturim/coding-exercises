/* == MERGE SORT */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);

  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  return merge(left, right);
};

function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

const nums = [5, 2, 4, 7, 3, 1];

const result = sortArray(nums);
console.log('result: ', result);
 