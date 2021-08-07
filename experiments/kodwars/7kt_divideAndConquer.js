function divCon(x) {
  let arrStr = [];
  let arrNum = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i].length) {
      arrStr.push(x[i]);
    } else {
      arrNum.push(x[i]);
    }
  }
  let summaStr = 0;
  let summaNum = 0;

  for (let i = 0; i < arrStr.length; i++) {
    summaStr = +summaStr + +arrStr[i];
  }
  for (let i = 0; i < arrNum.length; i++) {
    summaNum += arrNum[i];
  }
  return summaNum - summaStr;
}
console.log(divCon([9, 3, "7", "3"]));
