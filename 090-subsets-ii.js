/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = (nums) => {
  // global result
  const result = [];

  nums.sort((a, b) => a - b);

  // dfs
  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    // exclude
    dfs(i + 1, nums, slate);

    // include
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  // call dfs
  dfs(0, nums, []);

  // dedup with hash
  const hash = {};

  for (let i = 0; i < result.length; i++) {
    const item = result[i];
    if (hash[item]) continue;
    hash[item] = item;
  }
  return Object.values(hash);
};

const nums1 = [1, 2, 2];
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// const nums = [0]
// Output: [[],[0]]

const result = subsetsWithDup(nums1);

console.log('result: ', result);
