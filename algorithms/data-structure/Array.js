class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(elem) {
    this.data[this.length] = elem;
    this.length++;
    return this.length;
  }

  pop() {
    const temp = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return temp;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItem(index);
    return item;
  }

  shiftItem(index) {
    for (let i = index; i < this.length - 1; ++i) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
}

const newArray = new Array();
newArray.push('Hi');
newArray.push('Arsen');
newArray.delete(1);

console.log(newArray)
