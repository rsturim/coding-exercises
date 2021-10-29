/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // make mirror structure for visited
  const visited = grid.map((row) => row.map((col) => false));
  let maxIslandSize = 0;

  // iterate over each col [y, x] --> send to DFS
  for (let y = 0; y < grid.length; y++) {
    const row = grid[y];
    for (let x = 0; x < row.length; x++) {
      let islandSize = dFS(y, x, grid, visited);
      maxIslandSize = islandSize > maxIslandSize ? islandSize : maxIslandSize;
    }
  }
  console.log('maxIslandSize: ', maxIslandSize);
  return maxIslandSize;
};

// make DFS function, makes a stack, while loop
// exams if not visited, and is "1", tracks island size, receives neighbors from
// stack.push(...neighbors), continues while loop
function dFS(y, x, grid, visited) {
  const stack = [[y, x]];
  let islandSize = 0;
  while (stack.length > 0) {
    let currentNode = stack.pop();

    const [y, x] = currentNode;

    // deal with visits
    if (visited[y][x]) continue;
    visited[y][x] = true;

    // check if water or land
    if (grid[y][x] === 0) continue;
    islandSize++; // increment, size it's land

    const neighbors = getAdjNeighbors(y, x, grid, visited);
    // console.log('neighbors: ', neighbors);
    stack.push(...neighbors);
  }
  return islandSize;
}

// build getAdjacent neighbors
// inits [], check up, down, left, right --> adds to array, returns
function getAdjNeighbors(y, x, grid, visited) {
  let neighbors = [];

  let width = grid[0].length;
  let height = grid.length;
  // TOP
  if (y - 1 >= 0 && !visited[y - 1][x] && grid[y - 1][x] === 1) {
    neighbors.push([y - 1, x]);
  }
  // BOTTOM
  if (y + 1 < height && !visited[y + 1][x] && grid[y + 1][x] === 1) {
    neighbors.push([y + 1, x]);
  }
  // LEFT
  if (x - 1 >= 0 && !visited[y][x - 1] && grid[y][x - 1] === 1) {
    neighbors.push([y, x - 1]);
  }
  // RIGHT
  if (x + 1 < width && !visited[y][x + 1] && grid[y][x + 1] === 1) {
    neighbors.push([y, x + 1]);
  }

  return neighbors;
}

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
// Output: 6

// const grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
// Output: 0

const result = maxAreaOfIsland(grid);
console.log('result: ', result);
