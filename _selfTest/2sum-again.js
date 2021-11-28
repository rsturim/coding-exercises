const twoSum = (input, target) => {
  const hash = {};
  const result = [];

  for (let i = 0; i < input.length; i++) {
    let item = input[i];
    hash[item] = i;
  }

  console.log('hash: ', hash);

  for (let i = 0; i < input.length; i++) {
    let item = input[i];
    const potentialVal = target - item;

    if (hash[potentialVal]) {
      console.log('potentialVal: ', potentialVal);
      return [hash[item], hash[potentialVal]];
    }
  }

  return result;
};

const input = [2, 7, 11, 15];
const target = 9;
const result = twoSum(input, target);

console.log('result: ', result);
