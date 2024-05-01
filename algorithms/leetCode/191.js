function hammingWeight(n) {
    let res = 0;
    while (n) {
        if (n & 1) {
            res++;
        }
        n /= 2;
    }
    return res;
}

console.log(hammingWeight(31));