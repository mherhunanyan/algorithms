
function chunkArray(arr, chunkSize) {
  if (chunkSize <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const chunkedArray = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }

  return chunkedArray;
}

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunkArray(data, 3)); // Output: [[1, 2, 3], [4, 5, 6], [7]]
