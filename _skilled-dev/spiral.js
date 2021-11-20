const matrix = [
  [1, 2, 3, 4, 5],
  [18, 19, 20, 21, 6],
  [17, 28, 29, 22, 7],
  [16, 27, 30, 23, 8],
  [15, 26, 25, 24, 9],
  [14, 13, 12, 11, 10],
];

const makeSequence = (matrix) => {
  let result = [];
  let rowCount = matrix.length;
  let colCount = matrix[0].length;

  let startCol = 0;
  let endCol = colCount - 1;
  let startRow = 0;
  let endRow = rowCount - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let col = startCol; col <= endCol; col++) {
      const item = matrix[startRow][col];
      // console.log('item: ', item);
      result.push(item);
    }
    startRow++;

    for (let row = startRow; row <= endRow; row++) {
      const item = matrix[row][endCol];
      result.push(item);
    }
    endCol--;

    if (endRow >= startRow) {
      for (let col = endCol; col >= startCol; col--) {
        const item = matrix[endRow][col];
        result.push(item);
      }
      endRow--;
    }

    if (endCol >= startCol) {
      for (let row = endRow; row >= startRow; row--) {
        const item = matrix[row][startCol];
        result.push(item);
      }
    }
    startCol++;
  }

  return result;
};

const result = makeSequence(matrix);
console.log('result: ', result);
