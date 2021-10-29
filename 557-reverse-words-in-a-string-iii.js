const reverseWord = function (word) {
  let rev = '';
  for (let i = word.length - 1; i >= 0; i--) {
    const letter = word[i];
    rev = rev + letter;
  }
  return rev;
};

const reverseWords = function (s) {
  return s
    .split(' ')
    .map((word) => reverseWord(word))
    .join(' ');
};

// const s = "Let's take LeetCode contest";
// Output: "s'teL ekat edoCteeL tsetnoc"

const s = 'God Ding';
// Output: "doG gniD"

const result = reverseWords(s);
console.log('result: ', result);
