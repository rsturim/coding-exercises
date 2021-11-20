var prices  = [1,7,6,15,3]


const maxProfit = (prices) => {   
    let profit = 0
    for(i = 0; i < prices.length; i++) {
        for (j = i+1; j < prices.length; j++) {
            if (prices[i] < prices[j]) {
                const thisProfit = prices[j] - prices[i];
                if (thisProfit > profit) {
                    profit = thisProfit
                }
            }
        }
    }
        return profit
}
const prof = maxProfit(prices);
console.log('prof: ', prof);

