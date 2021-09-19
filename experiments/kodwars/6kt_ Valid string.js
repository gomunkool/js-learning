let arrVneshn
let dictionaryVneshn
var validWord = function (dictionary, word) {
  // dictionary = dictionary.sort((a, b) => a.length - b.length)
  dictionaryVneshn = dictionary

  let arrWord = word.split('')
  arrVneshn = arrWord
  for (let i = 0; i < dictionaryVneshn.length; i++) {
    let arr = []
    for (
      let j = 0;
      j < arrVneshn.length - dictionaryVneshn[i].length + 1;
      j++
    ) {
      arr.push(arrVneshn.slice(j, j + dictionaryVneshn[i].length).join(''))
    }
    if (arr.includes(dictionaryVneshn[i])) {
      let index = arr.indexOf(dictionaryVneshn[i])
      arrVneshn.splice(index, dictionaryVneshn[i].length)
      arrVneshn = arrVneshn.join('')

      // dictionaryVneshn.splice(i, 1)
      validWord(dictionaryVneshn, arrVneshn)
    }
  }

  if (arrVneshn.length === 0) {
    return true
  } else {
    return false
  }
}

console.log(validWord(['e', 'd', 'mew', 'ncq', 'awyb', 'oizx'], 'emewncqdawyb'))
