function validateUsr(username) {
  let arr = username.split("");

  if (arr.length > 16 || arr.length < 4) {
    return false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      let simv = arr[i];
      if (simv !== arr[i].toLowerCase()) {
        return false;
      }
      if (arr[i] === " ") {
        return false;
      }
    }
    return true;
  }
}
console.log(validateUsr("fa s"));
