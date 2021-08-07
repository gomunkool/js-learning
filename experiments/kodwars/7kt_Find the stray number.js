function stray(numbers) {
  let a = [];
  let b = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[0] === numbers[i]) {
      a.push(numbers[i]);
    } else {
      b.push(numbers[i]);
    }
  }
  if (a.length > b.length) {
    return b[0];
  } else {
    return a[0];
  }
}

stray([0, 1, 0, 0, 0]);
