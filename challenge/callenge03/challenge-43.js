function number(num) {
  let result = [];
  num = String(num);

  result.push(num[0]);
  result.push(num[2]);
  result.push(num[num.length - 1]);

  return result;
}

console.log(number(12345));

console.log(number(4378526389459));
