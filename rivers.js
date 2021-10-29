let grid = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [1, 1, 0, 0, 0],
];

const getUnvisitedNeighbors = ({ i, j, matrix, visited }) => {
  let unvisitedNeighbors = [];

  // check not first row, then check above
  if (i > 0 && !(visited[i - 1][j])) {
    console.log('check 1');
    unvisitedNeighbors.push([i - 1, j]);
  }

  // not in bottom row and not visited, check row below
  if (i < (matrix.length - 1) && !(visited[i + 1][j])) {
    console.log('check 2');
    unvisitedNeighbors.push([i + 1, j]);
  }

  // check neighbors to right
  if (j > 0 && !(visited[i][j - 1])) {
    console.log('check 3');
    unvisitedNeighbors.push([i, j - 1]);
  }

  // check neighbors to left
  if (j < (matrix[0].length - 1) && !visited[i][j + 1]) {
    console.log('check 4');
    unvisitedNeighbors.push([i, j + 1]);
  }

  return unvisitedNeighbors;
};

const traverseNode = ({ i, j, matrix, visited, sizes }) => {
  let currentRiverSize = 0;
  let nodeToExplore = [[i, j]];

  while (nodeToExplore.length) {
    const currentNode = nodeToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];

    if (!visited[i][j]) {
      visited[i][j] = true;
    }

    if (matrix[i][j] === 1) {
      currentRiverSize += 1;
    }

    let unvisitedNeighbors = getUnvisitedNeighbors({ i, j, matrix, visited });

    unvisitedNeighbors.forEach((neighbor) => {
      nodeToExplore.push(neighbor);
    });
  }
  console.log('currentRiverSize: ', currentRiverSize);
  console.log('------------------------------------------');
  if (currentRiverSize > 0) {
    sizes.push(currentRiverSize);
  }
};

const countRivers = (matrix) => {
  const sizes = [];
  const visited = matrix.map((col) => col.map((row) => false));

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    console.log('row: ', row);

    for (let j = 0; j < row.length; j++) {
      const col = row[j];

      if (!visited[i][j]) {
        traverseNode({ i, j, matrix, visited, sizes });
      }
    }
  }

  return sizes;
};

const result = countRivers(grid);
console.log('result: ', result);
