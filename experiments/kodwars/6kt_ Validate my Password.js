function validPass(password) {
  if (password.length < 4 || password.length > 20) {
    return "INVALID";
  } else {
    let arr = password.split("");

    let words = [];
    let num = [];
    for (let i = 0; i < arr.length; i++) {
      if (+arr[i]) {
        num.push(arr[i]);
      }
      if (
        (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90) ||
        (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122)
      ) {
        words.push(arr[i]);
      }
    }

    if (
      words.length > 0 &&
      num.length > 0 &&
      words.length + num.length === arr.length
    ) {
      return "VALID";
    } else {
      return "INVALID";
    }
  }
}

console.log(validPass("Username120!"));
