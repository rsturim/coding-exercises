/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const hash = {};
  const missing = [];

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];

    if (!hash[item]) {
      hash[item] = item;
    }
  }

  let vals = Object.values(hash);

  for (let i = 1; i < nums.length + 1; i++) {
    if (!hash[i]) {
      missing.push(i);
    }
  }

  return missing;
};

// const nums = [3, 3, 2, 1, 4, 5, 6, 4];
// Output [7,8]

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// Output: [5,6]

// const nums = [1,1];
// Output: [2]

const result = findDisappearedNumbers(nums);
console.log('result: ', result);

// first submission
/*
var findDisappearedNumbers = function (nums) {
    const len = nums.length + 1;
    let i = 1;
    let missing = [];
    while (i < len) {
      if (!nums.includes(i)) {
        missing.push(i);
      }
      i++;
    }
    return missing;
  };
  */
