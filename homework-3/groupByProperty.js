
function groupByProperty(arr, property) {
  return arr.reduce((result, obj) => {
    const key = obj[property];
    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(obj);
    return result;
  }, {});
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

console.log(groupByProperty(people, "age"));
/* Output: { '25': [ { name: 'Bob', age: 25 } ],'30': [ { name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 } ] } */
