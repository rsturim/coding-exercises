/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // global variable to store combos
  const result = [];

  const dfs = (i, nums) => {
    // base case (i has to be out of range [leaf level])
    if (i === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[j], nums[i]] = [nums[i], nums[j]];
    }
  };

  dfs(0, nums);

  return result;
};

let nums = [1, 2, 3];
// result:  [
//   [ 1, 2, 3 ],
//   [ 1, 3, 2 ],
//   [ 2, 1, 3 ],
//   [ 2, 3, 1 ],
//   [ 3, 2, 1 ],
//   [ 3, 1, 2 ]
// ]

// let nums = ['a', 'b', "c"];
// Output:  [
//   [ 'a', 'b', 'c' ],
//   [ 'a', 'c', 'b' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'c', 'b', 'a' ],
//   [ 'c', 'a', 'b' ]
// ]

const result = permute(nums);
console.log('result: ', result);
