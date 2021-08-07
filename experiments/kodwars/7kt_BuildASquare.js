function generateShape(integer) {
  let long = "";
  for (let i = 0; i < integer; i++) {
    long += "+";
  }
  let longPer = long + "\n";

  let rez = "";
  for (let i = 0; i < integer; i++) {
    if (i < integer - 1) {
      rez += longPer;
    } else {
      rez += long;
    }
  }
  return rez;
}

console.log(generateShape(8));
