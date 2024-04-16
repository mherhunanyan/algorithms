function reverse(str) {
  const backwards = [];
  const totalItem = str.length - 1;
  for (let i = totalItem; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  return str.split("").reverse().join("");
}

const reverse3 = str => [...str].reverse().join('');

const str = "Hi My name is Mher";
console.log(reverse3(str));
