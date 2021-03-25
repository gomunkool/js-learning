function disemvowel(str) {
  let wordsVowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let arr = str.split("");
  let resArr = [];
  for (let i = 0; i < wordsVowel.length; i++) {
    for (let y = 0; y < arr.length; y++) {
      if (arr[y] === wordsVowel[i]) {
        delete arr[y];
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) [resArr.push(arr[i])];
  }

  return resArr.join("");
}

console.log(disemvowel("loler"));
