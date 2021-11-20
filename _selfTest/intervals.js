let intervals = [
  [1, 3],
  [15, 18],
  [2, 6],
  [8, 10],
];

// output [[1,6],[8,10],[15,18]]

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort((x, y) => {
    return x[0] > y[0] ? 1 : -1;
  });

  console.log('intervals: ', intervals);

  let foo = 'duck';

  let bar = foo.split(''); //.
  console.log('bar: ', bar);
  bar.splice(3, 0, ['t', 'w', 'o', 'r']);
  console.log('foo: ', foo);
  console.log('bar: ', bar);
  const baz = bar.flat().join().replace(/,/g, "");
  console.log('baz: ',  baz);

  
  console.log('------------------------------------------');

  return 'yo! ';
};

const result = merge(intervals);
console.log('result: ', result);
