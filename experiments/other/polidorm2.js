function isPalindrome(line) {
  let str = String(line);

  let revers = str.split("").reverse().join("");

  if (revers === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(123456));
console.log(isPalindrome("anna"));
console.log(isPalindrome("an4na"));
