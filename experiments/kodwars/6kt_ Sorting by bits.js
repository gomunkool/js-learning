function sortByBit(arr) {
  return arr.sort((a, b) => {
    // console.log(a)
    // console.log(bit(a))
    // console.log(b)
    // console.log(bit(b))
    return bit(a) > bit(b) || (bit(a) === bit(b) && a > b) ? 1 : -1
  })
}
function bit(x) {
  // console.log(x)
  // console.log(x.toString(2))
  // console.log(x.toString(2).split(''))
  // console.log(
  //   x
  //     .toString(2)
  //     .split('')
  //     .reduce((c, d) => +c + +d, 0)
  // )

  return x
    .toString(2)
    .split('')
    .reduce((c, d) => +c + +d, 0)
}
console.log(sortByBit([3, 9]))
// let sss = [2, 5, 4, 1, 3]
// sss.sort((a, b) => {

//   return a - b
// })
// 3, 6, 5, 7, 9, 1
