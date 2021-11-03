/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const result = [];

  let maxCount = 0;
  let j = 0;
  for (let i = 0; i < nums1.length; i++) {
    const n1 = nums1[i];
    const n2 = nums2[j];
    if (n1 === n2) {
      maxCount = maxCount + 1;
      j++;
    }
  }

  return maxCount;
};

// const nums1 = [1, 2, 3, 2, 1],
//   nums2 = [3, 2, 1, 4, 7];
// Output: 3
// Explanation: The repeated subarray with maximum length is [3,2,1].

// const nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// Output: 5

const nums1 = [0, 0, 0, 0, 1],
  nums2 = [1, 0, 0, 0, 0];
// Output 4
const result = findLength(nums1, nums2);
console.log('result: ', result);
