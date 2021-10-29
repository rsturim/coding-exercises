/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
     if (n === 0) return 0;
     if (n === 1) return 1;

     return fib(n-1) + fib(n-2);
    
};





// const n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

const n = 7
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

const result = fib(n);

console.log('result: ', result);