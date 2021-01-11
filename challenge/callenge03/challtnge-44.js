let number = [1, 2, 4, 0, 0, 34, 2, 0, 123, 0, 1];

function zeroesAmount(num) {
  let summaZero = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) {
      summaZero.push(num[i]);
    }
  }
  return summaZero.length;
}

console.log(zeroesAmount(number));
console.log(zeroesAmount([1, 2, 3]));
console.log(zeroesAmount([1, 0, 1, 0]));
console.log(zeroesAmount([0, 0, 1, 0, 0]));
