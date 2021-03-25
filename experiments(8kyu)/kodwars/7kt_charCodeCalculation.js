function calc(x) {
  let arr = x.split("");
  let num = 0;
  let total1 = "";
  for (let i = 0; i < arr.length; i++) {
    let cod = arr[i].charCodeAt();
    total1 += cod;
  }
  let arrTotal1 = total1.split("");
  let arrTotal2 = arrTotal1.concat();
  for (let i = 0; i < arrTotal2.length; i++) {
    if (arrTotal2[i] === "7") {
      arrTotal2[i] = "1";
      num += 1;
    }
  }
  return num * 6;
}
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
