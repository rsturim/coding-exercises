/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let count = 0;
  const sortedHeights = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) {
      count++;
    }
  }
  return count;
};

const heights = [
  10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
];
// Output: 22

// const heights = [1, 1, 4, 2, 1, 3];
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// const heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

// const heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

const result = heightChecker(heights);
console.log('result: ', result);
