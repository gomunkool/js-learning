function sum(numbers) {
  let total = numbers.reduse(function (a, b) {
    return a + b;
  });
}

console.log(sum([1, 5.2, 4, 0, -1])); //, 9.2);
console.log(sum([])); //, 0);
