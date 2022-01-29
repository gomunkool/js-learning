let res

function add(n) {
  res = n
  return function (x) {
    return (res += x)
  }
}

console.log(add(3)(5))
console.log(add(3)(5))
