for (i = 1; i <= 100; i++) {
  for (y = 1; y < i; y++) {
    if (i % y === 0) {
      console.log(i);
    }
  }
}
