function revrot(str, sz) {
  if (sz <= 0 || str.length === 0 || sz > str.length) {
    return ''
  } else {
    const arr = str.split('')
    let arrArr = []
    let res = []
    while (arr.length > 0) {
      arrArr.push(arr.slice(0, sz))
      arr.splice(0, sz)
    }
    for (let i = 0; i < arrArr.length; i++) {
      if (arrArr[i].length === sz) {
        let per = 0
        arrArr[i].forEach((element) => {
          per += element ** 2
        })
        if (per % 2 === 0) {
          res.push(arrArr[i].reverse())
        } else {
          let cout = arrArr[i].splice(0, 1)
          arrArr[i].push(cout[0])
          res.push(arrArr[i])
        }
      }
    }
    return res.join().split(',').join('')
  }
}
console.log(revrot('123456987654', 6))
// 5630 0065 5734 4694 85
// 0365 0650 7345 6944
