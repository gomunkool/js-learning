var maxRedigit = function (num) {
  let arr = num.toString().split("");

  if (arr.length === 3) {
    for (let i = 0; i < arr.length; i++) {
      for (let y = 0; y < arr.length - 1; y++) {
        if (arr[y] < arr[y + 1]) {
          let count = arr[y];
          arr[y] = arr[y + 1];
          arr[y + 1] = count;
        }
      }
    }
    return Number(arr.join(""));
  } else {
    return null;
  }
};

maxRedigit(263);
