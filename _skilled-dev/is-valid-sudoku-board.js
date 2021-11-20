
/**
 * @param {List[List[int]]} board
 * @return {boolean}
 */
function isValidSudokuBoard(board) {
  const numRows = board.length;
  const numCols = board[0].length;
  if (numRows !== numCols) return false;

  const subSquare = Math.sqrt(numRows);
  // check rows
  // rows
  for (let y = 0; y < numRows; y++) {
    // cols
    const set = new Set();
    //rows
    for (let x = 0; x < numCols; x++) {
      const cell = board[y][x];
      if (cell === 0) continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  // check cols
  for (let x = 0; x < numCols; x++) {
    // rows
    const set = new Set();
    for (let y = 0; y < numRows; y++) {
      const cell = board[y][x];
      if (cell === 0) continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  for (let y = 0; y < subSquare; y++) {
    for (let x = 0; x < subSquare; x++) {
      const set = new Set();
      for (let yy = 0; yy < subSquare; yy++) {
        for (let xx = 0; xx < subSquare; xx++) {
          let cell = board[subSquare * y + yy][subSquare * x + xx];
          if (cell === 0) continue;
          if (set.has(cell)) return false;
          set.add(cell);
        }
      }
    }
  }
  return true;
}

const board = [
  [0, 0, 6, 0, 0, 4, 0, 0, 0],
  [5, 0, 0, 1, 0, 0, 0, 0, 8],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 4, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0],
  [4, 1, 0, 8, 0, 0, 9, 0, 0],
  [7, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 0, 0, 1],
];

const board2 = [
  [0, 0, 6, 0, 0, 4, 0, 0, 0],
  [5, 0, 0, 1, 0, 0, 0, 0, 8],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 4, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0],
  [4, 1, 0, 8, 0, 0, 9, 0, 0],
  [7, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 6, 0, 0, 1],
];

const result = isValidSudokuBoard(board2);
console.log('result: ', result);
