/* == 
Strategy. 
1) Main function body
    a) initialize islandCount variable
    b) create a "visited" copy of matrix, set all items to false
    c) iterate over each array (row) and iterate over each item (col) before going to the next row
    d) for each item pass that item on to a dFS function

2) Write a dFS function that return boolean
    a) initialize a stack for coords, initialize and islandSize = 0
    b) begin loop, 
    c) pop() first item -- skip if "visited", skip is "0"  ... increment a islandSize++ 
    d) if yes to c) examine adjacent neighbors (write function for this) - return unvisited coords (don't worry about 1 or 0)
    c) push found adjacent neighbors into stack, continue loop
    d) when loop completes, return boolean based on islandSize > 0;

3) Back in main function body, if dFS returns true, increment islandCount++
4) Return island count


-------------------------------------------*/

const numIslands = function (grid) {
  let islandCount = 0;
  const visited = grid.map((row) => row.map((col) => false));

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const col = row[j];
      if (dFS(i, j, grid, visited)) {
        islandCount++;
      }
    }
  }

  return islandCount;
};

function dFS(i, j, grid, visited) {
  // use a stack for depth first search
  // put x,y pairs in stack
  const stack = [[i, j]];

  let islandSize = 0;

  while (stack.length) {
    let currentNode = stack.pop();
    const [i, j] = currentNode;

    // check if we've seen this element already at currentNode, skip (continue) if we have
    if (visited[i][j]) continue;
    visited[i][j] = true;

    // check if element is part of an island
    if (grid[i][j] === '0') continue; // skip (continue) if it's not an island
    islandSize++;

    let adjNeighbors = getAdjNeighbors(i, j, grid, visited);
    stack.push(...adjNeighbors);
  }
  return islandSize > 0;
}

function getAdjNeighbors(i, j, grid, visited) {
  const adjNeighbors = [];

  if (i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j]); // UP (make sure you're not on the first row)
  if (i < grid.length - 1 && !visited[i + 1][j]) {
    adjNeighbors.push([i + 1, j]); // DOWN (make sure you're not on the bottom row)
  }
  if (j > 0 && !visited[i][j - 1]) adjNeighbors.push([i, j - 1]); // LEFT (make sure you're not on the first col)
  if (j < grid[0].length - 1 && !visited[i][j + 1])
    adjNeighbors.push([i, j + 1]); // RIGHT (make sure you're not on the last col)

  return adjNeighbors;
}

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

const grid3 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];
const grid5 = [
  ['1', '0', '1'],
  ['0', '1', '0'],
  ['1', '0', '1'],
];

const grid1 = [
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1'],
];

const result = numIslands(grid);

console.log('result: ', result);
