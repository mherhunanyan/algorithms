
function numJewelsInStones(jewels, stones) {
  let obj = {};
  let count = 0;
  for (let jewel of jewels) {
    obj[jewel] = jewel;
  }
  
  for (let stone of stones) {
    if (obj[stone] !== undefined) {
      count++;
    }
  }
  return count;
}

Number()

const jewels = "aA";
const stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));