/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  if (image === null || image.length === 0 || image[sr][sc] === newColor) {
    return image;
  }

  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
};

function fill(image, y, x, color, newColor) {
  // base case
  if (
    y < 0 ||
    y >= image.length ||
    x < 0 ||
    x >= image[0].length ||
    image[y][x] !== color
  )
    return;

  image[y][x] = newColor;

  fill(image, y, x - 1, color, newColor); //LEFT
  fill(image, y, x + 1, color, newColor); //RIGHT
  fill(image, y + 1, x, color, newColor); //TOP
  fill(image, y - 1, x, color, newColor); //DOWN
}

const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  newColor = 2;
// Output: [[2,2,2],[2,2,0],[2,0,1]]

// const image = [
//     [0, 0, 0],
//     [0, 0, 0],
//   ],
//   sr = 0,
//   sc = 0,
//   newColor = 2;
// Output: [[2,2,2],[2,2,2]]

const result = floodFill(image, sr, sc, newColor);
console.log('result: ', result);
