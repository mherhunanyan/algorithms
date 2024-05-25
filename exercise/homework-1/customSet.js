class CustomSet {
  #elements = Object.create(null);

  add(value) {
    this.#elements[value] = true;
    return this;
  }

  has(value) {
    return !!this.#elements[value];
  }

  remove(value) {
    if (this.has(value)) {
      delete this.#elements[value]
      return true;
    }
    return false;
  }
}

const mySet = new CustomSet();
mySet.add(1).add(2).add(3);
console.log(mySet.remove(3));