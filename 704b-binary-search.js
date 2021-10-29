var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  while (left <= right) {
    const midPoint = Math.floor((left + right) / 2);
    if (nums[midPoint] === target) {
      return midPoint;
    } else if (target > nums[midPoint]) {
      left++;
    } else {
      right--;
    }
  }
  // fallback
  return -1;
};

const nums = [2, 5];
const target = 5;
// Output: 0

// const nums = [-1, 0, 3, 5, 9, 12];
// const target = 9;
// Output: 4

// const nums = [-1,0,3,5,9,12];
// const target = 2;
// Output: -1

// const nums = [5];
// const target = 5;
// Output: 0;

const result = search(nums, target);
console.log('result: ', result);
