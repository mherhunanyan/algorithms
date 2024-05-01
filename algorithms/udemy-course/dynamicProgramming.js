function memoizedAddTo80() {
  const cash = {};
  return function(n) {
    if (n in cash) {
      return cash[n];
    } else {
      console.log('long time');
      cash[n] = n + 80;
      return cash[n];
    }
  }
}

const memoized = memoizedAddTo80();

console.log(memoized(9));
console.log(memoized(9));
console.log(memoized(9));