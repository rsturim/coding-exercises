// Curried function
const curried = a => b => a + b;


const cur = curried(1)(2);
console.log('cur: ', cur);

// Partially applied curried
const partiallyAppliedfunc = curried(1);
const paf = partiallyAppliedfunc(2);
console.log('paf: ', paf); // output 3
