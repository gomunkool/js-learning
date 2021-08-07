function decToBin(x) {
  if (x === 0) {
    return "0";
  } else {
    const divider = 2;
    let binaryNumber = ``;

    while (x > 0) {
      binaryNumber += x % divider;
      x = parseInt(x / divider);
    }

    return binaryNumber.split(``).reverse().join(``);
  }
}

decToBin(123);
