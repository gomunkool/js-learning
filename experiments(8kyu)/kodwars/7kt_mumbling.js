function accum(s) {
  let arr = s.toLowerCase().split("");
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }

  let str = "";
  for (key in obj) {
    let litleLetters = "";

    for (let i = key; i > 0; i--) {
      litleLetters = litleLetters + obj[key];
    }
    str = `${str}${obj[key].toUpperCase()}${litleLetters}-`;
  }
  return str.slice(0, str.length - 1);
}

console.log(accum("ZpglnRxqenU"));
// console.log(accum("NyffsGeyylB"));
// console.log(accum("MjtkuBovqrU"));
// console.log(accum("EvidjUnokmM"));
// console.log(accum("HbideVbxncC"));
