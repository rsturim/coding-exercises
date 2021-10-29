var firstUniqChar = function (s) {
  const charMap = {};
  let firstUniq = null;

  for (const char of s) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  for (const char in charMap) {
    const element = charMap[char];

    if (element === 1) {
      firstUniq = char;
      break;
    }
  }

  return firstUniq ? s.indexOf(firstUniq) : -1;
};

// const s = 'leetcode';
// Output: 0

// const s = 'loveleetcode';
// Output: 2

const s = 'aabb';
// Output: -1

const results = firstUniqChar(s);

console.log('results: ', results);
