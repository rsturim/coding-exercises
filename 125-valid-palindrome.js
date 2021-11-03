/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let isValid = false;
  let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  if (cleaned.length == 0) return true;

  let j = cleaned.length - 1;
  for (let i = 0; i < cleaned.length / 2; i++) {
    const left = cleaned[i];
    const right = cleaned[j];
    if (left === right) {
      isValid = true;
    } else {
      isValid = false;
      break;
    }
    j--;
  }
  return isValid;
};

const s = '0P';
// Output: false

// const s = 'A man, a plan, a canal: Panama';
// Output: true

// const s = "race a car"
// Output: false

// const s = ' ';
// Output: true

const result = isPalindrome(s);
console.log('result: ', result);
