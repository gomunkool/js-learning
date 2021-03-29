function nthFibo(n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a;
}

console.log(nthFibo(1));
console.log(nthFibo(4));
