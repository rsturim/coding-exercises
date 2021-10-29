/* == INSERTION SORT */
// fast IF the array is partially sorted
//  O(n):T,   O(1): S
var sortArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i;

    while (j > 0 && nums[j] < nums[j - 1]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }

  return nums;
};

const nums = [5, 2, 4, 7, 3, 1];

const result = sortArray(nums);
console.log('result: ', result);
