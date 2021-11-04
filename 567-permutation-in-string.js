/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const arr = s1.split('');
  const combos = permute(arr);

  console.log('combos: ', combos);



  for (let i = 0; i < combos.length; i++) {
    const item = combos[i];
    let cStr = item.join('');
    if (s2.includes(cStr)) return true;
  }

  return false;
};

var permute = function (letter) {
  // global variable to store combos
  const result = [];

  const dfs = (i, letter) => {
    if (i === letter.length) {
      result.push([...letter]);
      return;
    }

    for (let j = i; j < letter.length; j++) {
      [letter[i], letter[j]] = [letter[j], letter[i]];
      dfs(i + 1, letter);
      [letter[i], letter[j]] = [letter[j], letter[i]];
    }
  };

  dfs(0, letter);

  return result;
};

// const s1 = 'oab';
// const s2 = 'eidbaooo';
// Output: true

// const s1 = 'ab';
// const s2 = 'eidboaoo';
// Output: false

// const s1 = 'epo';
// const s2 = 'properties';


const s1 = 'prosperity';
const s2 = 'properties';



const result = checkInclusion(s1, s2);
console.log('result: ', result);
