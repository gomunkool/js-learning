function sumTriangularNumbers(n) {
  if (n > 0) {
    let counter = 2;
    let per = 1;
    let rez = 0;
    for (let i = n + 1; i > 1; i--) {
      rez += per;
      per += counter;
      counter++;
      console.log(rez + " rez");
      console.log(per + " per");
      console.log(counter + " count");
    }
    return rez;
  } else return 0;
}
sumTriangularNumbers(4);
