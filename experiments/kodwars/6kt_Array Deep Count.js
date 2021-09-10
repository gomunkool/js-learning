function deep(a) {
  let count = 0
  function deep1(a) {
    console.log(a)
    for (let i = 0; i < a.length; i++) {
      count++
      console.log(a[i])
      if (typeof a[i] === 'object') {
        deep1(a[i])
      }
    }
    return count
  }

  return deep1
}

let deepCount = deep()

console.log(deepCount([[[[[[[[[]]]]]]]]]))
