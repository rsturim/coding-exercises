/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // global variable to store combos
  const result = [];

  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);

  return result;
};

// let nums = [1, 2, 3];

let nums = ['a', 'b'];

const result = permute(nums);

console.log('result: ', result);

result.forEach((element) => {
  console.log('element: ', element.join(''));
});
