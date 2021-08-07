function factorial(n) {
  if (n > 0) {
    for (let x = n - 1; x > 0; x--) {
      n = n * x;
    }
    return n;
  }
  if (n === 0) {
    n = 1;
    for (let x = n - 1; x > 0; x--) {
      n = n * x;
    }
    return n;
  } else {
    return null;
  }
}

factorial(0);
