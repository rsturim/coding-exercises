const isValid = (str) => {
  const stack = [];
  let i = 0;
  let len = str.length;
  while (i < len) {
    let currParen = str[i];
    stack.push(currParen);

    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    if (open + closed === '()') {
      stack.pop();
      stack.pop();
    }
    i++;
  }
  return stack.length === 0;
};

const s = '(()())()';
const result = isValid(s);

console.log('result: ', result);
