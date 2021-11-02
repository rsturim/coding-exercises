/**
 * @param {List[str]} strings
 * @return {List[List[str]]}
 */

function groupPermutationsOfPalindromes(strings) {
  let anagramMap = getPalidromeAnagramMap(strings);
  return [...Object.values(anagramMap)];
}m

function getPalidromeAnagramMap(strings) {
  const sortedStrings = strings.map((s) => {
    return s.split('').sort().join('');
  });

  const map = {};

  for (let i = 0; i < strings.length; i++) {
    const item = strings[i];
    const sItem = sortedStrings[i];
    if (!isPermutationAPalidrome(item)) continue;

    if (!map[sItem]) {
      map[sItem] = [item];
    } else {
      map[sItem].push(item);
    }
  }
  return map;
}

function isPermutationAPalidrome(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter] = map[letter] + 1;
    }
  }
  const countArr = Object.values(map);
  let oddCount = 0;

  for (const i of countArr) {
    if (isOdd(i)) {
      oddCount++;
    }
  }

  return oddCount <= 1;
}

function isOdd(num) {
  return num % 2 > 0;
}

function isPalidrome(str) {
  let j = str.length - 1;
  let result = true;
  for (let i = 0; i < str.length / 2; i++) {
    const front = str[i];
    console.log('front: ', front);
    const back = str[j];
    if (front !== back) {
      result = false;
    }
    j--;
  }
  return result;
}

// Input
const strings = [
  'racecar',
  'acerrac',
  'aaccerr',
  'naa',
  'aan',
  'todo',
  'doto',
  'code',
  'bob',
];

// Output: groupPermutationsOfPalindromes(strings);
[['aaccerr', 'acerrac', 'racecar'], ['aan', 'naa'], ['bob']];

const result = groupPermutationsOfPalindromes(strings);
console.log('result: ', result);
