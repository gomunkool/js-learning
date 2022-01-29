function multiplyAll(arr) {
  return function multiply_all(num) {
    return arr.map((i) => i * num)
  }
}

console.log(multiplyAll([1, 2, 3])(2))
