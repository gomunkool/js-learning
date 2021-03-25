function highAndLow(numbers) {
  let arr = numbers.split(" ");
  console.log(arr);
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    Number(arr[i]);

    if (Number(arr[i]) < min) {
      min = Number(arr[i]);
    }
    if (Number(arr[i]) > max) {
      max = Number(arr[i]);
    }
  }
  return `${max} ${min}`;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
