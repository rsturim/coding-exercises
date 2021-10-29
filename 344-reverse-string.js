var reverseString = function (s) {
  let right = s.length - 1;

  for (let left = 0; left < s.length / 2; left++) {
    const item = s[left];
    s[left] = s[right];
    s[right] = item;
    right--;
  }
  return s;
};

var s = ['h', 'e', 'l', 'l', 'o'];

const result = reverseString(s);
console.log('result: ', result);
