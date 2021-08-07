function count(array) {
  let objekt = {};
  for (let i = 0; i < array.length; i++) {
    if (objekt[array[i]] > 0) {
      objekt[array[i]] += 1;
    } else {
      objekt[array[i]] = 1;
    }
  }
  return objekt;
}
console.log(count(["a", "a", "b", "b", "b"]));
// { a: 2, b: 3 }
