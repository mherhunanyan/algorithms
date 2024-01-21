class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;

    return {
      next() {
        if (current < end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const range = new Range(1, 6);
for (let num of range) {
  console.log(num); // 1, 2 ... 5
}