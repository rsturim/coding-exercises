/* == 

sort array
make outer loop
check it next num is same as past sum, if true skip (continue)
make target variable, flip sign
make twoSum helper, get result -- spread into results array;
-------------------------------------------*/

var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const i_item = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      const j_item = nums[j];

      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;

        const k_item = nums[k];
        if (i_item + j_item + k_item === 0) {
          result.push([i_item, j_item, k_item]);
        }
      }
    }
  }

  return result;
};

const nums = [-1, 0, 1, 2, -1, -4];
// Output: [[-1,-1,2],[-1,0,1]]

const result = threeSum(nums);
console.log('result: ', result);
