const findGreates = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
};

const findSmallest = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (min > arr[i]){
      min = arr[i];
    }
  }
  return min;
}

function findGCD(arr) {
  let a = findGreates(arr);
  let b = findSmallest(arr);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}


