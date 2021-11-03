/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const result = BigInt(num1) + BigInt(num2);
  return `${result}`;
};

const num1 = '11',
  num2 = '123';
// Output: "134"

//  const num1 = "456", num2 = "77"
// Output: "533"

// const num1 = '0',
//   num2 = '0';
// Output: "0"

// const num1 = '9333852702227987',
//   num2 = '85731737104263';
// "9419584439332250"

const result = addStrings(num1, num2);
console.log('result: ', typeof result);
console.log('result: ', result);
