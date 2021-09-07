function nextPrime(n) {
  if (n === 1 || n === 0) {
    return 2
  }
  const seive = []
  for (let i = 2; i <= n + 1000; i++) {
    if (!seive[i]) {
      for (let j = i * i; j <= n + 1000; j += i) {
        seive[j] = true
      }
    }
  }
  for (let i = n + 1; i < n + 10000; i++) {
    if (!seive[i]) {
      return i
    }
  }
}

nextPrime(1000000) //2999;
