function test2(string) {
  const arr = string.split('')
  const newArr = []
  let count = 1
  let leter = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (leter === arr[i]) {
      count++
      if (i === arr.length - 1) {
        newArr.push(count)
        newArr.push(leter)
      }
    } else if (leter !== arr[i]) {
      newArr.push(count)
      newArr.push(leter)
      count = 1
      leter = arr[i]
    }
  }
  return newArr.join('')
}

console.log(test2('aaaaabbbbbrrrrr'))
