function sum(numbers) {
  if ((numbers.length = 0)) {
    return +0;
  }
  for (let i = 0; i < numbers.length; i++) {
    let summa = 0;
    summa = summa + numbers[i];
  }
  return summa;
}
debugger;
console.log(sum([])); //, 0);
console.log(sum([1, 5.2, 4, 0, -1])); //, 9.2);
