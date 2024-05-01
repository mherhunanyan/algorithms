function majorityElement(arr) {
  let max = 0;
  let maxVal = 0;
  let obj = {};

  for (const currnetElement of arr) {
    obj[currnetElement] = (obj[currnetElement] || 0) + 1;
    if (max < obj[currnetElement]) {
      max = obj[currnetElement];
      maxVal = currnetElement;
    }
  }
  return maxVal;
}

// Boyer-Moore
function majorityElement2(arr) {
  let condidat = null;
  let count = 0;
  for (const currentElement of arr) {
    if (count === 0) {
      condidat = currentElement;
    }

    if (currentElement === condidat) {
      count++;
    } else {
      count--;
    }
  }
  return condidat;
}

const arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement2(arr));
