var groupAnagrams = function (strs) {
  // make hash table
  // sort strs array
  const hash = {};
  const sortedStrings = strs.map((str) => {
    return str.split('').sort().join('');
  });

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const sortedWord = sortedStrings[i];

    if (!hash[sortedWord]) {
      hash[sortedWord] = [word];
    } else {
      hash[sortedWord].push(word);
    }
  }
  return Object.values(hash);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const result = groupAnagrams(strs);
console.log('result: ', result);
