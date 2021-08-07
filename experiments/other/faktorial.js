function factorial(n) {
  if (n <= 0 || n > 12) {
    throw new RangeError(n);
  }

  let rez = 1;
  for (let i = n; i > 0; i--) {
    rez = i * rez;
  }
  return rez;
}

console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(9));
console.log(factorial(13));
