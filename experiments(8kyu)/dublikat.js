function distinct(a) {
  let res = [];

  for (let i = 0; i < a.length; i++) {
    if (res.includes(a[i]) === false) {
      res.push(a[i]);
    }
  }
}
console.log(distinct([1, 2, 3, 4, 5, 5, 5, 5, 6, 6, 7]));
console.log(distinct([1, 2, 3, 3, 5, 5, 5, 5, 6, 6, 7]));
console.log(distinct([1, 2, 3, 5, 5, 5, 5, 5, 6, 6, 7]));
console.log(distinct([1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5]));
