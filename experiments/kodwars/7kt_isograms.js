function isIsogram(str) {
  let arr = str.toLowerCase().split("");

  for (let i = 0; i < arr.length; i++) {
    let arrContainer = arr;

    let container = arr[i];
    delete arrContainer[i];

    for (let y = 0; y < arrContainer.length; y++) {
      if (container === arrContainer[y]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("moOse"));
console.log(isIsogram(""));
