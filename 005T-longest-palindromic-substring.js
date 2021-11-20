var longestPalindrome = function (s) {
  let result = '';

  if (!s) return result;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;

      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }

      let start = left + 1;
      let end = right;

      let substring = s.slice(start, end);

      if (substring.length > result.length) {
        result = substring;
      }
    }
  }

  return result;
};

// r1: 0,0
// r2: 0,1
// r3: 1,1
// r4: 1,2
// r5: 2,2
// etc

// const s = 'babad';
// Output: "bab"
// Note: "aba" is also a valid answer.

// const s = 'cbbbaaaabd';
// Output: "bb"

// const s = "a"
// Output: "a"

// const s = "ac"
// Output: "a"

const s = 'XracecarZ';

const result = longestPalindrome(s);
console.log('result: ', result);
