/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // global result
  const result = [];

  const dfs = (i, nums, slate) => {
    // base case (i has to be out of range [leaf level])
    if (i === nums.length) {
      result.push([...slate]);
      return;
    }

    // exclude - do nothing pass it along
    dfs(i + 1, nums, slate);

    // include
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);

  return result;
};

const nums = [1, 2, 3];
const result = subsets(nums);
console.log('result: ', result);
