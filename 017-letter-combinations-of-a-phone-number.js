/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // global result
  const result = [];
  if (digits.length === 0) return result;

  const alphas = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  // dfs recusive helper
  const dfs = (i, digits, slate) => {
    // base case
    if (i === digits.length) {
      result.push(slate.join(''));
      return;
    }

    let chars = alphas[digits[i]];

    for (let char of chars) {
      slate.push(char);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
  };

  dfs(0, digits, []);
  return result;
};

// const digits = '23';
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

const digits = '';
// Output: []

// const digits = "2"
// Output: ["a","b","c"]

const result = letterCombinations(digits);
console.log('result: ', result);
