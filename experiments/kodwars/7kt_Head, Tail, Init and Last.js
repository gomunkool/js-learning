function head(arr) {
  return arr[0]
}
function tail(arr) {
  return arr.slice(1)
}
function init(arr) {
  return arr.slice(0, arr.length - 1)
}
function last(arr) {
  return arr[arr.length - 1]
}

console.log(head([5, 1]))
console.log(tail([1, 2, 3, 4]))
console.log(init([1, 5, 7, 9]))
console.log(last([7, 2]))
