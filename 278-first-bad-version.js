var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let left = 1;
    let right = n;
    let bad = n;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        bad = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return bad;
  };
};

const n = 5,
  bad = 4;
// Output: 4

const result = solution(n);
console.log('result: ', result(n));