
var maxProfit = function(prices) {
    let l = 0;      // buy pointer
    let r = 1;      // sell pointer
    let tp = 0;     // total profit
    
    while (r < prices.length) {        
        let buyP = prices[l];
        let sellP = prices[r];
        if (sellP > buyP) {
            tp = (sellP - buyP) + tp;
        }
        l++;
        r++;        
    }    
    return tp;
};


const prices = [7,1,5,3,6,4];
// const prices = [1,2,3,4,5];
// const prices = [7,6,4,3,1];
const results = maxProfit(prices);
console.log('results: ', results);
