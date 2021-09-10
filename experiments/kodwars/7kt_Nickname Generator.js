function nicknameGenerator(name) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  name.length
  if (name.length < 4) {
    let arr = name.split('')
    for (let i = 0; i < vowels.length; i++) {
      if (vowels[i] === arr[2]) {
        arr = arr.slice(0, 4)
        return arr.join('')
      }
    }
    arr = arr.slice(0, 3)
    return arr.join('')
  } else {
    return 'Error: Name too short'
  }
}

nicknameGenerator('Dan')
// nicknameGenerator('Gregory')
