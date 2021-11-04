/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];
  const validPairs = '() {} []';
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);

    let open = stack[stack.length - 2];   // 1 prior
    let closed = stack[stack.length - 1]; // most recent in stack
 
    let potentialPair = open + closed;
    if (validPairs.includes(potentialPair)) {
      stack.pop();
      stack.pop();
    }
    i++;
  }
  return stack.length === 0;
};

// var s = "{}";
// var s = '[{}()]';
// var s = "{[][]()}";
var s = "{[([])]}"
// var s = "()[]{}[]";
// var s;
const result = isValid(s);
console.log('result: ', result);
