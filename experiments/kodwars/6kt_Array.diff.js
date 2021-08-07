function arrayDiff(a, b) {
  let arr = a.filter((item) => {
    console.log(item);
    for (let i = 0; i < b.length; i++) {
      console.log(b[i]);
      if (item === b[i]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}

arrayDiff([11, 22, 33], [33, 55]);
