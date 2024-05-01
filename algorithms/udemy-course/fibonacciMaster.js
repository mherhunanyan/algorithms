function fibonacciMaster() {
  const cach = {};

  return function fib(n) {
    if (n in cach) {
      return cach[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cach[n] = fib(n - 1) + fib(n - 2);
        return cach[n];
      }
    }
  };
}

const fasterFib = fibonacciMaster();

console.log(fasterFib(6));
