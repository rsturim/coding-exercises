/**
 * @param {List [int]} input
 * @return {List [int]}
 */

const buildProductArray = (input) => {
  const len = input.length;
  const result = new Array(len).fill(1);
  let leftProduct = 1;
  for (let i = 1; i < len; i++) {
    const endIndex = len - 1 - i;
      console.log('endIndex: ', endIndex);

    const rightIndex = endIndex + 1;
    //   console.log('rightIndex: ', rightIndex);

    const rightVal = result[rightIndex];
    const inputVal = input[rightIndex];
      console.log('rightVal: ', rightVal);
      console.log('inputVal: ', inputVal);
      console.log("product = ", rightVal * inputVal);
      console.log('------------------------------------------');

    result[endIndex] = rightVal * inputVal;
    const item = input[i];
  }
  console.log('result: ', result);
  console.log('------------------------------------------');
  console.log('------------------------------------------');

  for (let i = 0; i < len; i++) {
    const item = input;
    const productExceptSelf = leftProduct * result[i];
    console.log('productExceptSelf: ', productExceptSelf);
    result[i] = productExceptSelf;
    leftProduct = leftProduct * input[i];
    console.log('leftProduct: ', leftProduct);
    console.log('------------------------------------------');
  }

  return result;
};

/* == brute force */
// const buildProductArray = (input) => {
//   const result = [];
//   let i = 0;
//   while (i < input.length) {
//     let sum = 1;
//     for (let j = 0; j < input.length; j++) {
//       if (j !== i) {
//         sum *= input[j];
//       }
//     }
//     result.push(sum);
//     i++;
//   }
//   return result;
// };

// Input
const input = [1, 2, 3, 4, 5];
// Output: buildProductArray(input)
// [2*3*4*5, 1*3*4*5, 1*2*4*5, 1*2*3*5, 1*2*3*4]
// [120, 60, 40, 30, 24];

// const input = [-1, 2, 3, 4, 5];
// expected: [120, -60, -40, -30, -24],

// const input = [0, 2, 3, 4, 5];
// expected: [120, 0, 0, 0, 0],

const result = buildProductArray(input);
console.log('result: ', result);
