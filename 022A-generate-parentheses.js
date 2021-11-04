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

const generateParens = (n) => {
  // GLOBAL result
  const result = [];

  const dfs = (i, n, slate) => {
    if (i === n * 2) {
      // if were at the leaf level and it's valid, add to result
      if (isValid(slate.join(''))) {
        result.push(slate.join(''));
      }
      return;
    }
    // dfs recursive call
    // add open paren to slate
    slate.push('(');
    dfs(i + 1, n, slate);
    slate.pop();

    // add closed paren to slate
    slate.push(')');
    dfs(i + 1, n, slate);
    slate.pop();
  };

  dfs(0, n, []);

  return result;
};

const result = generateParens(3);
console.log('result: ', result);
