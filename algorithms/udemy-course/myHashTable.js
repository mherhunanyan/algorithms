class HashTable {
  constructor(size) {
    this.data = new Array(size);
    this.obj = {};
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    for (let item of currentBucket) {
      if (item[0] === key) {
        return item[1];
      }
    }
  }

  keys() {
    const keysArray = [];
    for (let arr of this.data) {
      if (typeof arr === "object") {
        for (let item of arr) {
          keysArray.push(item[0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);
console.log(myHashTable.keys());
