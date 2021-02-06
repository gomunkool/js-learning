var isAnagram = function (test, original) {
  for (let i = test.length; i > 0; i--) {
    original.indexOf(test[i]);
  }
  return test;
};

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("dumble", "bumble"));
