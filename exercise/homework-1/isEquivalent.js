function isNaN(value) {
  return value !== value;
}

function isEquivalent(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return true;
  }

  if (a === 0 && b === 0) {
    return 1 / a === 1 / b;
  }

  return a === b;
}

console.log(
isEquivalent(NaN, NaN), // should return true.
isEquivalent(0, -0), // should return false.
isEquivalent(5, 5), // should return true.
isEquivalent("hello", "hello"), // should return true.
isEquivalent("hello", "world"), // should return false.
isEquivalent(true, false) // should return false.
);