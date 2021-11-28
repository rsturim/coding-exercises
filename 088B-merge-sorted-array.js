var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  // for (let i = nums1.length - 1; i >= 0; i--) {
  while (second >= 0) {
    let fVal = nums1[first];
    let sVal = nums2[second];

    if (fVal > sVal) {
      nums1[i] = fVal;
      first--;
    } else {
      nums1[i] = sVal;
      second--;
    }
    i--;
  }
};

// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;
// Output: [1,2,2,3,5,6]

const nums1 = [-1, -1, 0, 0, 0, 0];
const m = 4;
const nums2 = [-1, 0];
const n = 2;
// Output [-1,-1,-1,0,0,0]

// const nums1 = [1];
// const m = 1;
// const nums2 = [];
// const n = 0;
// Output: [1]

// const nums1 = [0];
// const m = 0;
// const nums2 = [1];
// const n = 1;
// Output: [1]

// const result = merge(nums1, m, nums2, n);
merge(nums1, m, nums2, n);
console.log('nums1: ', nums1);
