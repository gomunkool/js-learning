function squareDigits(num) {
  let strin = String(num);

  let mas = Array.from(strin);

  let sum = [];

  for (let i = 0; i < mas.length; i++) {
    let square = Math.pow(mas[i], 2);
    sum.push(square);
  }
  let joi = sum.join("");

  let cifra = Number(joi);
  return cifra;
}

console.log(squareDigits(9119));
console.log(squareDigits(1111));
console.log(squareDigits(7143));
console.log(squareDigits(3333));
console.log(squareDigits(2222));
