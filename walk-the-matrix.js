/**
 * @param {List[List[int]]} matrix
 * @return {List[int]}
 */
const walkMatrix = (matrix) => {
  const visited = matrix.map((row) => row.map((col) => false));

  const rowCount = matrix[0].length;
  const colCount = matrix.length;
  const finalLength = rowCount * colCount;

  const result = [];

  let startRow = 0;
  let endRow = rowCount - 1;
  let startColumn = 0;
  let endColumn = colCount - 1;

  // while (endRow >= startRow && endColumn >= startColumn) {
  while (result.length < finalLength) {
    // traverse top
    for (let column = startColumn; column <= endColumn; column++) {
      const item = matrix[startRow][column];
      result.push(item);
    }
    // We have walk across the entirety of the starting row, so increment the index.
    startRow++;

    // Walk down (right column)
    for (let row = startRow; row <= endRow; row++) {
      const item = matrix[row][endColumn];
      result.push(item);
    }
    // We have walked across end column, so we decrement the index.
    endColumn--;

    // Walk left (bottom row)
    for (let column = endColumn; column >= startColumn; column--) {
      const item = matrix[endRow][column];
      result.push(item);
    }
    // We have walked across end row, so we decrement the index.
    endRow--;

    // Walk up (left column)
    for (let row = endRow; row >= startRow; row--) {
      const item = matrix[row][startColumn];
      result.push(item);
    }
    // We have walked across the starting column, so we increment the index
    startColumn++;
  }

  return result;
};

// Input
// const matrix = [
//   [0, 1, 2, 3],
//   [11, 12, 13, 4],
//   [10, 15, 14, 5],
//   [9, 8, 7, 6],
// ];

const matrix = [
    [0, 1],
    [5, 2],
    [4, 3],
  ];
  

// Output: walkMatrix(matrix)
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const result = walkMatrix(matrix);
console.log('result: ', result);
