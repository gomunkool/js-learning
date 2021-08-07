function maskify(cc) {
  let arr = cc.split("");
  let arrRez = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 4) {
      arrRez.push("#");
    }
    if (i >= arr.length - 4) {
      arrRez.push(arr[i]);
    }
  }
  return arrRez.join("");
}
console.log(maskify("4556364607935616"));
console.log(maskify("Skippy"));
