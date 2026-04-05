 /**
 * @param {number[]} prices
 * @return {number}
 */

let maxProfit = function(prices) {

    let minValue = prices[0]
    let profit = 0

    for(let i=1; i<prices.length; i++){
        let result = prices[i] - minValue
        if(result > profit) profit = result
        if(prices[i] < minValue ) minValue = prices[i]
    }
    return profit
}

const result = maxProfit([7,1,5,3,6,4])
const result2 = maxProfit([7,6,4,3,1])

console.log({result, result2});