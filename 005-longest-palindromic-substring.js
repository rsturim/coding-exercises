/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = '';

  if (!s) return result;

  let j = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = j + i;

      // open window wider and wider is letters equal
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      let start = left + 1;
      let end = right;

      let substring = s.slice(start, end);
      if (result.length < substring.length) {
        result = substring;
      }
    }
  }

  return result;
};

const s = 'babad';
// Output: "bab"
// Note: "aba" is also a valid answer.

// const s = 'cbbbaaaabd';
// Output: "bb"

// const s = "a"
// Output: "a"

// const s = "ac"
// Output: "a"

// const s = 'XracecarZ';

const result = longestPalindrome(s);
console.log('result: ', result);
