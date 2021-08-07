function filterHomogenous(arrays) {
  let arr = [];
  arrays.forEach((element) => {
    if (element.length > 0) {
      let x;
      for (let i = 0; i < element.length; i++) {
        if (typeof element[0] === typeof element[i]) {
          x = true;
        } else {
          x = false;
          break;
        }
      }
      if (x === true) {
        arr.push(element);
      }
    }
  });
  return arr;
}

filterHomogenous([
  ["k", "r", "s", "x", "w", "f", "m", "v"],
  ["n", "e", "j", "s", "y", 1, "u", "n", "q"],
]);
