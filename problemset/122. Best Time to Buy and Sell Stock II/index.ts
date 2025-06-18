function maxProfit(prices: number[]): number {
    let profits = 0;
    for (let i = 0; i <= prices.length - 2; i++) {
        const price = prices[i + 1] - prices[i];
        if (price > 0) {
            profits += price;
        }
    }
    return profits
};


const prices = [1, 2, 3, 4, 5];

console.log(maxProfit(prices))