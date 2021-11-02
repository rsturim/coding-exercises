/**
 * @param {number[][]} isConnected
 * @return {number}
 */

function dFS(vertex, adjList, visited) {}

function buildAdjList(isConnected) {}

var findCircleNum = function (isConnected) {
  const adjList = buildAdjList(isConnected);
  const visited = {};
  const numProvices = 0;

  for (let vertex = 0; vertex < adjList.length; i++) {
    const item = adjList[vertex];

    if (!visited[vertex]) {
      numProvices++;
      dFS(vertex, adjList, visited);
    }
  }

  return numProvices;
};

let isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
// output: 2

// let isConnected = [
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1],
// ];
// output 3

const result = findCircleNum(isConnected);
