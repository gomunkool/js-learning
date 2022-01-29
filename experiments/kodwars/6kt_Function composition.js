const addOne = (a) => a + 1
const multTwo = (b) => b * 2

function compose(...arg) {
  console.log(arguments)
}

console.log(compose(addOne, multTwo, addOne, addOne)(2))
