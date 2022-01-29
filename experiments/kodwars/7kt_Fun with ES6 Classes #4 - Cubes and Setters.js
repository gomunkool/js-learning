class Cube {
  constructor(length) {
    this.length = length
  }
  get surfaceArea() {
    return this.length ** 2 * 6
  }
  set surfaceArea(value) {
    this.length = Math.sqrt(value / 6)
  }
  get volume() {
    return this.length ** 3
  }
  set volume(value) {
    this.length = Math.cbrt(value)
  }
}
const cube = new Cube(1)
console.log(cube.surfaceArea)
console.log(cube.volume)
cube.surfaceArea = 54

console.log(cube)
console.log(cube.volume)
console.log(cube.surfaceArea)
