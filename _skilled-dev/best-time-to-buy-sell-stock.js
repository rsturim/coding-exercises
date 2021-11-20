/**
 * @param {number[]} prices
 * @return {number}
 */
const getMaxProfit = (prices) => {
  console.log('prices: ', prices);
  let maxProfit = 0;
  let anchor = 0;
  for (let i = 1; i < prices.length; i++) {
    let previousPrice = prices[anchor];
    let currentPrice = prices[i];
    if (previousPrice < currentPrice) {
      maxProfit = Math.max(maxProfit, currentPrice - previousPrice);
    } else {
      anchor = i;
    }
  }

//   console.log('maxProfit: ', maxProfit);
  return maxProfit;
};

// const input = [9, 2, 4, 3, 8, 5];
// const input = [3, 4, 5, 10, 2, 20];
// const result = getMaxProfit(input);
// console.log('result: ', result);

const tests = [
  {
    input: [],
    expected: 0,
    description: 'empty prices',
  },
  {
    input: [42],
    expected: 0,
    description: 'one price',
  },
  {
    input: [9, 2, 4, 3, 8, 5],
    expected: 6,
    description: 'question prompt example',
  },
  {
    input: [10, 7, 3, 4, 6],
    expected: 3,
    description: 'price decrease then increase',
  },
  {
    input: [3, 4, 5, 10, 7],
    expected: 7,
    description: 'price increase then decrease',
  },
  {
    input: [3, 4, 5, 10, 2, 20],
    expected: 18,
    description: 'replace previous max',
  },
  {
    input: [1, 2, 3, 4, 5, 6],
    expected: 5,
    description: 'always increasing',
  },
  {
    input: [6, 5, 4, 3, 2, 1],
    expected: 0,
    description: 'always decreasing',
  },
  {
    input: [1, 5, 1, 5, 2, 5],
    expected: 4,
    description: 'repeated numbers',
  },
  {
    input: [42, 42, 42, 42],
    expected: 0,
    description: 'price never changes',
  },
];

const validate = ({ input, expected, description }) => {
  const userAnswer = getMaxProfit(input);
  const passed = userAnswer === expected;

  return { passed, description, expected, userAnswer };
};

tests.forEach((test) => {
  console.log('expected: ', test.expected);
  validate(test);
  console.log('------------------------------------------');
});

// const result = getMaxProfit(input);
