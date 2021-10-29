/**
 * @param {string} s
 * @return {boolean}
 */

// var isValid = function(s) {
//     if (!s) {
//         return false;
//     }
//     const pairs = {
//         "(": ")",
//         "[": "]",
//         "{": "}"
//     };

//     const charArray = s.split("");
//     const stack = [];

//     for (let i = 0; i < (charArray.length); i++) {
//         let br = charArray[i];
//         if (pairs[br]) {
//             stack.push(pairs[br]);
//         } else {
//             let popped = stack.pop();
//             if (popped !== br) {
//                 return false;
//             }
//         }
//     }x
//     return stack.length === 0;
// };

var isValid = function (s) {
  const stack = [];
  const pairs = '() {} []';
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    let potParen = open + closed;

    if (pairs.includes(potParen)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
};

// var s = "()[]{}";
var s = '[{}()]';
// var s = "{[][]()}";
// var s = "{[([])]}"
// var s = "()[]{}[]";
// var s;
const result = isValid(s);
console.log('result: ', result);
