var validWord = function (dictionary, word) {
  const arrWord = word.split('')
  for (let i = 0; i < dictionary.length; i++) {
    let length = dictionary[i].length
    let arr = []
    for (let j = 0; j < arrWord.length - length + 1; j++) {
      let trim = arrWord.slice(j, j + length).join('')
      arr.push(trim)
    }
    console.log(dictionary[i])
    console.log(arr.includes(dictionary[i]))

    if (!arr.includes(dictionary[i])) {
      return false
    }
  }
  return true
}
console.log(validWord(['code', 'star', 'wars'], 'starwars'))
