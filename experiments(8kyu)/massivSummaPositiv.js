function positiveSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let sum = 0 + arr[i];
    }
  }
  return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5])); //,13);
console.log(positiveSum([])); //,0);
console.log(positiveSum([-1, -2, -3, -4, -5])); //,0);
console.log(positiveSum([-1, 2, 3, 4, -5])); //,9);
