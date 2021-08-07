function fizzbuzz(n) {
  //console.log(n);
  let arr = [];
  for (let y = 1; y <= n; y++) {
    //console.log(n);
    //console.log(y);
    arr.push(y);
  }
  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arr[i] = "FizzBuzz";
    } else if (arr[i] % 3 === 0) {
      arr[i] = "Fizz";
    } else if (arr[i] % 5 === 0) {
      arr[i] = "Buzz";
    }
  }
  return arr;
}
console.log(fizzbuzz(10));
//console.log(fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
//console.log(fizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
