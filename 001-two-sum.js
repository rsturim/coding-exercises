var twoSum = function (nums, target) {
  const hash = {};

  // create a hash, {nums: index}
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    hash[val] = i;
  }

  console.log('hash: ', hash);
  
  for (let i = 0; i < nums.length; i++) {
    let potentialKey = target - nums[i];
    console.log('nums[i]: ', nums[i]);
    console.log('potentialKey: ', potentialKey);
    console.log('------------------------------------------');


    if (hash[potentialKey] && hash[potentialKey] !== i) {
      return [i, hash[potentialKey]];
    }

  }
};

let nums = [2, 7, 11, 15], target = 9;

// let nums = [3, 2, 4],
//   target = 6;
// Output: [1,2]

// let nums = [3, 3], target = 6;
// Output: [0,1]

// let nums = [0,4,3,0], target = 0;
// [0,3]

const results = twoSum(nums, target);

console.log('results: ', results);
