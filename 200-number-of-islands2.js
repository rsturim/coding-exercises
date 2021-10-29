const numIslands = function (grid) {
  let islandCount = 0;
  const visited = grid.map(row => row.map(col => false));

  for (let i = 0; i < grid.length; i++) {
    const cols = grid[i];
    for (let j = 0; j < cols.length; j++) {
      const col = cols[j];
      if (dfs(i, j, grid, visited)) {
        islandCount++;
      }
    }
  }

  return islandCount;
};

const dfs = (i, j, grid, visited) => {
  const stack = [[i, j]];
  islandSize = 0;

  while (stack.length) {
    const island = stack.pop();

    const [i, j] = island;

    if (visited[i][j]) continue;
    visited[i][j] = true;

    if (grid[i][j] === '0') continue;
    islandSize++;

    let adjNeighbors = getAdjNeighbors(i, j, grid, visited);

    stack.push(...adjNeighbors);
  }

  return islandSize > 0;
};

const getAdjNeighbors = (i, j, grid, visited) => {
  const neighbors = [];

  if (i > 0 && !visited[i - 1][j]) neighbors.push([i - 1, j]); // UP
  if (i < grid.length - 1 && !visited[i + 1][j]) neighbors.push([i + 1, j]); // DOWN

  if (j > 0 && !visited[i][j - 1]) neighbors.push([i, j - 1]); // LEFT
  if (j < grid[0].length - 1 && !visited[i][j + 1]) neighbors.push([i, j + 1]); // RIGHT
  return neighbors;
};

const grid3 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

const result = numIslands(grid3);

console.log('result: ', result);
