
function maxProfit(arr) {
    let profit = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > arr[i - 1]) {
            profit += arr[i] - arr[i - 1];
        }
    }
    return profit;
}

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));