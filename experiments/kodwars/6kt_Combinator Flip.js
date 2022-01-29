function flip(fn) {
  return fn
}
function print(a, b) {
  return b + ' -> ' + a
}
console.log(flip(print)(4, 5))
