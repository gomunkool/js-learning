function mygcd(x, y) {
  let e;
  if (x >= y) {
    e = x;
  } else {
    e = y;
  }

  for (let i = e; i >= 1; i - 1) {
    if (x % i == 0 && y % i == 0) {
      return i;
    }
  }
}

console.log(mygcd(100, 10));
console.log(mygcd(323, 12));
console.log(mygcd(333, 3));
console.log(mygcd(12, 12));
console.log(mygcd(30, 12));
console.log(mygcd(1, 1));
