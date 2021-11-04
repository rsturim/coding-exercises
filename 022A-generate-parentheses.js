const generateParens = (n) => {
  // GLOBAL result
  const result = [];

  const dfs = (i, n, slate, openCount, closedCount) => {
    // BACKTRACKING CASE (NEW)
    if (openCount > n) {
      return; // short circuit
    }
    if (closedCount > openCount) {
      return; // short circuit
    }

    if (i === n * 2) {
      // if at the leaf level and it's valid, add to result
      result.push(slate.join(''));
      return;
    }
    // dfs recursive call
    // add open paren to slate

    slate.push('(');
    dfs(i + 1, n, slate, openCount + 1, closedCount);
    slate.pop();

    // add closed paren to slate
    slate.push(')');

    dfs(i + 1, n, slate, openCount, closedCount + 1);
    slate.pop();
  };
  dfs(0, n, [], 0, 0);

  return result;
};

const result = generateParens(1);
console.log('result: ', result);

// 1 --> result:  ['()']
// 2 --> result:  [ '(())', '()()' ]
// 3 --> result:  [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
