/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // global result
  const result = [];

  const dfs = (i, nums) => {
    // base case (i has to be out of range [leaf level])
    if (i === nums.length) {
      result.push([...nums]);
      return;
    }

    // dfs recursive case
    const uniq = {}; // for dedup
    for (let j = i; j < nums.length; j++) {
      if (uniq[nums[j]]) continue;
      uniq[nums[j]] = true;

      // perform swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);

  return result;
};

const nums = [1, 1, 2];
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// const nums = [1, 2, 3];
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const result = permuteUnique(nums);
console.log('result: ', result);
