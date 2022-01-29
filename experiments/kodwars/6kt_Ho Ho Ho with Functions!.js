let fraser = 'Ho '
function ho() {
  fraser += 'Ho '
  let arr = fraser.split(' ')
  arr.splice(-1, 1)
  return arr.join(' ') + '!'
}
console.log(ho())
