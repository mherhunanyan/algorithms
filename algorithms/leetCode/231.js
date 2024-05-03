function isPowerOfTwo(n) {
    if (n < 0) {
        return false;
    }
    
    let count = 0;
    while (n) {
        if (n & 1) {
            count++;
        }
        n /= 2;
    } 
    
    return count === 1 ? true : false;
}

console.log(isPowerOfTwo(1));