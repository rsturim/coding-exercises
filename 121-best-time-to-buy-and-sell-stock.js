 const maxProfit = (prices) => {    
    let left = 0;   // buy
    let right = 1;  // sell
    let maxProfit = 0;

    while(right < prices.length) {
        const buyP = prices[left];
        const sellP = prices[right];
        
        // buy low, sell high
        if (buyP < sellP) {
            const currProfit = sellP - buyP;
            maxProfit = Math.max(maxProfit, currProfit);
        } 
        // buy was high, move to pointer
        else  {
            left = right;
        }      
        right++;            
    }
    return maxProfit
}

const prices = [7,1,5,3,6,4];
const results = maxProfit(prices);
console.log('results: ', results);
