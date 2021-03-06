/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board[0].length; j++) {
      let cell = board[i][j];
      if (cell === '.') continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  for (let j = 0; j < board[0].length; j++) {
    const set = new Set();
    for (let i = 0; i < board.length; i++) {
      let cell = board[i][j];
      if (cell === '.') continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  // column
  for (let i = 0; i < 3; i++) {
    // row
    for (let j = 0; j < 3; j++) {
      // in the sub-box
      // column
      const set = new Set();
      for (let k = 0; k < 3; k++) {
        // row
        for (let l = 0; l < 3; l++) {
          const cell = board[3 * i + k][3 * j + l];
          if (cell === '.') continue;
          if (set.has(cell)) return false;
          set.add(cell);
        }
      }
    }
  }
  return true;
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
// Output: true

const board2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
// Output: false

const board3 = [
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['1', '2', '3', '.', '.', '.', '9', '8', '7'],
  ['4', '5', '6', '.', '.', '.', '1', '2', '3'],
  ['7', '8', '9', '.', '.', '.', '4', '5', '6'],
];

const result = isValidSudoku(board3);
console.log('result: ', result);
