function maxProfit(arr) {
    let min_price = Infinity;
    let max_profit = 0;
    for (let i = 0; i < arr.length; ++i) {
        const currentItem = arr[i];
        if (currentItem < min_price) {
            min_price = currentItem;
        }
        if (currentItem - min_price > max_profit) {
            max_profit = currentItem - min_price;
        }
    }
    return max_profit;
}
const prices = [1, 2];
console.log(maxProfit(prices)); // 5