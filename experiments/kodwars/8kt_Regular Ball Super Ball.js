var Ball = function (ballType) {
  ballType ? (this.ballType = ballType) : (this.ballType = 'regular')
}

ball1 = new Ball()
ball2 = new Ball('super')

console.log(ball1)
console.log(ball2)

console.log(ball1.ballType)
console.log(ball2.ballType)
console.log(Ball)
