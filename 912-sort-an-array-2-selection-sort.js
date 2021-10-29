/* == SELECTION SORT */
var sortArray = function (nums) {
  let minIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIdx] > nums[j]) {
        minIdx = j;
      }
    }
    // swap
    [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
  }

  return nums;
};

const nums = [5, 2, 4, 7, 3, 1];

const result = sortArray(nums);
console.log('result: ', result);
