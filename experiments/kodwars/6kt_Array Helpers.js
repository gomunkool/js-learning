var numbers = new Array(1, 2, 3, 4, 5)

Array.prototype.square = function () {
  return this.map((el) => el * el)
}

Array.prototype.cube = function () {
  return this.map((el) => el * el * el)
}
Array.prototype.average = function () {
  if (this.length > 0) {
    return (
      this.reduce((res, el) => {
        return (res += el)
      }) / this.length
    )
  }
  return NaN
}
Array.prototype.sum = function () {
  if (this.length > 0) {
    return this.reduce((res, el) => (res += el))
  }
  return 0
}
Array.prototype.even = function () {
  return this.filter((el) => {
    if (!(el % 2)) {
      return el
    }
  })
}
Array.prototype.odd = function () {
  return this.filter((el) => {
    if (el % 2) {
      return el
    }
  })
}

console.log(numbers.square())
