function nextPrime(n) {
  let i = 2
  let x = n + 1

  while (x >= i) {
    if (x % i === 0) {
      i++ //?
      x++ //?
    }
  }
}

console.log(nextPrime(5)) // 7)

// nextPrime(2971) //2999;
