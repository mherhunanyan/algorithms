function getType(value) {
  if (value === null) {
    return "null";
  }

  if (typeof value === "object") {
    if (Array.isArray(value)) {
      return "array"
    }
    return "object"
  }

  return typeof value;
}

console.log(getType([1, 2, 3])); // Should return "array"
