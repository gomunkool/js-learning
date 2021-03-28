var FilterString = function (value) {
  let arr = value.split("");
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) + 1) {
      num.push(arr[i]);
    }
  }
  return Number(num.join(""));
};

console.log(FilterString("a1b2c3"));
