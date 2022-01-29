function squaresNeeded(grains) {
  if (grains > 0) {
    let rase = 1
    let square = 1
    let count = 1
    while (rase < grains) {
      rase += count * 2
      square++
      count *= 2
      console.log(square)
    }
    return square
  } else return 0
}
console.log(squaresNeeded(22))

//1/2/4/8/16/32/64/128/256/512/1024/2048/4096
//1/2/3/4/5 /6 /7 /8  /9  /10  /11/ 12  /13
