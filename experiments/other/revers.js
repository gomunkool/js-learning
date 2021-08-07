function iii(s) {
  var i = 0;
  for (var j = s.length - 1; j > 0; j--) {
    for (i = 0; i < j; i++) {
      temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
  }

  return s;
}

console.log(iii(12344));
