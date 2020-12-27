function number(num) {
  num = String(num);

  return num.split("");
}

console.log(number(12345));

console.log(number(4378526389459));
