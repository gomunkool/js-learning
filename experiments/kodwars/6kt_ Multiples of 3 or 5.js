function solution(number) {
  let arr = []
  let res = 0
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0) {
      arr.push(i)
    }
    if (i % 5 === 0 && !arr.includes(i)) {
      arr.push(i)
    }
  }
  arr.forEach((e) => {
    res += e
  })
  return res
}
console.log(solution(16))
//60
