var isAnagram = function (test, original) {
  let testLow = test.toLowerCase();
  let originalLow = original.toLowerCase();

  if (testLow.length == originalLow.length) {
    let cont = [];
    let orig = originalLow.split("");
    for (let i = 0; i < testLow.length; i++) {
      let index = orig.indexOf(testLow[i]);
      if (index != -1) {
        cont.push(index);

        orig.splice(index, 1);
      }
    }
    if (cont.length == originalLow.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(isAnagram("Foefet", "toffee"));
console.log(isAnagram("dUmble", "bumble"));
console.log(isAnagram("dumble", "dddddumble"));
//сортировать
