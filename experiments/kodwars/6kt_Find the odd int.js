function findOdd(A) {
  let num = 0;
  for (let i = 0; i < A.length; i++) {
    num = 0;
    let item = A[i];
    for (let y = 0; y < A.length; y++) {
      if (item === A[y]) {
        num += 1;
        // console.log(`${"num"} ${num}`);
        // console.log(`${"item"} ${item}`);
      }
    }
    console.log(num);
    if (num % 2 > 0) {
      return item;
    }
  }
}

console.log(findOdd([1, 1, -2, 4, 4, -1, -2]));
