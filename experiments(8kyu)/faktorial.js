function factorial(n) {
  let rez;
  for (let i = n; i > 0; i--) {
    let y = i;
    rez = y * (i - 1);
  }
  console.log(rez);
}

console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(9));
console.log(factorial(12));
