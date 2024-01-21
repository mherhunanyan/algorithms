'use strict'

function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach(name => {
    const value = obj[name];

    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });

  return Object.freeze(obj);
}

const obj = { a: { b: 2 } };
deepFreeze(obj);
try {
  console.log(obj.a.b);
  obj.a.b = 3;
} catch (e) {
  console.error(e);
}