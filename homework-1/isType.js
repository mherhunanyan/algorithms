function getType(value) {
  if (value === null) {
    return "null";
  }

  if (typeof value === "function") {
    return "object";
  }

  return typeof value;
}

function isType(value, type) {
  if (getType(type) === "string") {
    type = type.toLowerCase();

    return getType(value) === type;
  }

  if (getType(type) === 'object') {
    return value instanceof type;
  }

  return false;
}

console.log(isType(5, "number")); // true
console.log(isType("5", "number")); // false
console.log(isType(NaN, "number")); // true
console.log(isType({}, "number")); // false
console.log(isType(4, "string")); // false
console.log(isType("4", "string")); // true
console.log(isType(true, "string")); // false
console.log(isType({}, "string")); // false
console.log(isType(true, "boolean")); // true
console.log(isType("true", "boolean")); // false
console.log(isType(true, "Boolean")); // true
console.log(isType({}, "object")); // true
console.log(isType("{}", "object")); // false
console.log(isType(4, "object")); // false
console.log(isType(() => {}, "object")); // true
console.log(isType([], "object")); // true
console.log(isType([], "array")); // false
console.log(isType("[]", "object")); // false
console.log(isType("true", "string")); //true

console.log(isType({}, Object)); // true
console.log(isType(new Date(), Date)); // true
console.log(isType([], Array)); // true
console.log(isType([], Object)); //true
console.log(isType({}, Array)); //false
console.log(isType(() => {}, Function)); // true