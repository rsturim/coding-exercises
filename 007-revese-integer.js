/**
 * @param {number} x
 * @return {number}
 */
 var reverse = (x) => {
    const isNegative = x < 0
    const solution = parseInt( (x+"").split("").reverse().join("").replace("-", ""), 10)
    if (solution > 2**31) {
        return 0 
    } else {
        return isNegative  ? solution * -1 : solution
    }

};


// let answer = reverse(321);
// let answer = reverse(-321);
// let answer = reverse(120);
// let answer = reverse(0);
let answer = reverse(1534236469)
console.log('answer: ', answer);



