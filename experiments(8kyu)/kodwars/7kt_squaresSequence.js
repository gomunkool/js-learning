function squares(x, n) {
  if (n <= 0) {
    let arrEmpty = [];
    return arrEmpty;
  }
  let arr = [];
  let num = x;
  arr.push(num);
  for (i = 1; i < n; i++) {
    let squer = Math.pow(num, 2);
    num = squer;
    arr.push(squer);
  }
  return arr;
}

console.log(squares(10, 4)); //[2,4,16,256,65536]);
