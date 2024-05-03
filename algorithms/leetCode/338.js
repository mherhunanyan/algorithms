    const countOfOnes = (n) => {
        let countOfOne = 0;
        while (n) {
            countOfOne += n & 1;
            n >>= 1;
        }
        return countOfOne;
    }

    const countBits = (n) => {
        const ans = [];
        for (let i = 0; i <= n; ++i) {
            ans.push(countOfOnes(i));
        }
        return ans;
    }