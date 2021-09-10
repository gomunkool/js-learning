function explode(s) {
  const arr = s.split('')
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '1') {
      res.push('1')
    }
    if (arr[i] === '2') {
      res.push('22')
    }
    if (arr[i] === '3') {
      res.push('333')
    }
    if (arr[i] === '4') {
      res.push('4444')
    }
    if (arr[i] === '5') {
      res.push('55555')
    }
    if (arr[i] === '6') {
      res.push('666666')
    }
    if (arr[i] === '7') {
      res.push('7777777')
    }
    if (arr[i] === '8') {
      res.push('88888888')
    }
    if (arr[i] === '9') {
      res.push('999999999')
    }
  }
  return res.join('')
}

explode('123')
