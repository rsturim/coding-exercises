/**
 * @param {string} s
 * @return {number}
 */
``
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxCount = 0;

  while (right < s.length) {
    let rChar = s.charAt(right);
    let lChar = s.charAt(left);
    
    if (!set.has(rChar)) {
      set.add(rChar);
      maxCount = Math.max(maxCount, set.size);
      right++;
    } else {
      set.delete(lChar);
      left++;
    }
  }

  return maxCount;
};

const s = 'dvdf';
// Output: 3

// const s = '';
// Output: 0

// const s = ' ';
// Output: 1

// const s = 'abcabcbb';
// Output: 3

// const s = 'bbbbb';
// Output: 1

// const s = 'pwwkew';
// Output: 3

// const s = 'aab';
// Output: 2

// const s = "cdd"
// Output: 2

const result = lengthOfLongestSubstring(s);
console.log('result: ', result);
