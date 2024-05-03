
const hammingDistance = (x, y) => {
    let dif = x ^ y;
    let count = 0;
    while (dif) {
        count += dif & 1;
        dif >>= 1;
    }

    return count;
}

console.log(hammingDistance(73, 93));