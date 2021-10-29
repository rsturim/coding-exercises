/* == QUICK SORT */

const pivot = (nums, left, right) => {
  let R = right;
  let L = left;
  let LL = left - 1;

  while (L <= R) {
    if (nums[L] < nums[R]) {
      LL++;
      [nums[LL], nums[L]] = [nums[L], nums[LL]];
      L++;
    } else {
      L++;
    }
  }
  LL++;
  [nums[LL], nums[R]] = [nums[R], nums[LL]];

  return LL;
};

var sortArray = function (nums, left = 0, right = nums.length - 1) {
  if (left < right) {
    let pIdx = pivot(nums, left, right);

    sortArray(nums, left, pIdx - 1); // left side
    sortArray(nums, pIdx + 1, right); // right side
  }

  return nums;
};

const nums = [5, 2, 4, 7, 3, 1];

const result = sortArray(nums);
console.log('result: ', result);
