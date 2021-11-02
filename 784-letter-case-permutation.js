/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  console.log('S: ', S);
  const result = [];

  const dFS = (i, S, slate) => {
    console.log('i: ', i, slate);
    // base case
    if (i === S.length) {
      result.push(slate.join(''));
      return;
    }
    // dfs recusive case
    let char = S[i];

    // check if number or string
    if (Number.isInteger(parseInt(char))) {
      slate.push(char);
      dFS(i + 1, S, slate);
      slate.pop();
    } else {
      // upper
      slate.push(char.toUpperCase());
      dFS(i + 1, S, slate);
      slate.pop();

      // lower
      slate.push(char.toLowerCase());
      dFS(i + 1, S, slate);
      slate.pop();
    }
  };
  dFS(0, S, []);
  return result;
};

const S = 'a1b2';
// Output: ["a1b2","a1B2","A1b2","A1B2"]

const result = letterCasePermutation(S);
console.log('result: ', result);
