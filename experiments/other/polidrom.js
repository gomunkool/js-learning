function isPalindrome(line) {
  let start = String(line);
  let revers = String(line);
  console.log(revers);
  var i = 0;
  for (var j = revers.length - 1; j > 0; j--) {
    for (i = 0; i < j; i++) {
      temp = revers[i];
      revers[i] = revers[j];
      revers[j] = temp;
    }
  }

  console.log(revers);
  debugger;
  if (start === revers) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(123456));
console.log(isPalindrome("anna"));
console.log(isPalindrome("an4na"));
