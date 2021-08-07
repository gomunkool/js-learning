function solve(a, b) {
  console.log("0");
  let arr = [];
  if (a === 0 || b === 0) {
    console.log(`1 ${a} ${b}`);

    arr.push(a);
    arr.push(b);
    return arr;
  }

  if (a >= 2 * b && a !== 0 && b !== 0) {
    a = a - 2 * b;
    console.log(`2 ${a} ${b}`);
    return solve(a, b);
  }
  if (b >= 2 * a && a !== 0 && b !== 0) {
    b = b - 2 * a;
    console.log(`3 ${a} ${b}`);
    return solve(a, b);
  } else {
    arr.push(a);
    arr.push(b);
    return arr;
  }
  // console.log(`finish ${arr}`);
  // return arr;
}

console.log(solve(6, 19));
// i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
// ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
// iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
