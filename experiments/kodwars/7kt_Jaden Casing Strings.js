String.prototype.toJadenCase = function () {
  const arr = this.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i + 1] = arr[i + 1].toUpperCase()
    }
  }
  arr[0] = arr[0].toUpperCase()

  return arr.join('')
}

var str = "how can mirrors be real if our eyes aren't real"
str.toJadenCase()
