/* == BUBBLE SORT */
var sortArray = function (nums) {
  let swap = true;

  // count optimization
  let count = 0;

  while (swap) {
    swap = false;

    for (let i = 0; i < nums.length - count; i++) {
      let j = i + 1;
      // const item = nums[i];
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        swap = true;
      }
    }
    count++;
  }
  return nums;
};



const nums = [5, 2, 4, 7, 3, 1];

const result = sortArray(nums);
console.log('result: ', result);
