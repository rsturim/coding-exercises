var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;

  const result = new Array(m + n).fill('_');

  let i = 0;
  let i1 = 0;
  let i2 = 0;

  while (i < result.length) {
    let num1 = nums1[i1] ?? Infinity;
    let num2 = nums2[i2] ?? Infinity;

    if (num1 < num2) {
      result[i] = num1;

      i1++;
    } else {
      result[i] = num2;

      i2++;
    }
    i++;
  }

  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
};

// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;
// Output: [1,2,2,3,5,6]


const nums1 =[-1,-1,0,0,0,0];
const m =4;
const nums2 =[-1,0];
const n =2;

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
