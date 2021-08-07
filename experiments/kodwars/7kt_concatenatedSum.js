function checkConcatenatedSum(x, y) {
  if (x >= 0) {
    let str = String(x);
    let arr = str.split("");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let cont = "";
      for (let e = 1; e <= y; e++) {
        cont += `${arr[i]}`;
      }
      sum += +cont;
    }

    if (x === sum) {
      return true;
    } else {
      return false;
    }
  } else {
    let str = String(x);
    let arr = str.split("");
    arr.splice(0, 1);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let cont = "";
      for (let e = 1; e <= y; e++) {
        cont += `${arr[i]}`;
      }
      sum += +cont;
    }
    let mod = Math.abs(x);
    if (mod === sum) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkConcatenatedSum(2997, 3));
console.log(checkConcatenatedSum(-2997, 3));
