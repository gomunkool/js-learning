class File {
  constructor(fullName, contents) {
    this._fullName = fullName
    this._contents = contents
    this.cont = -1
    this.cont2 = -1
  }
  get fullName() {
    return this._fullName
  }
  // set fullName(value) {}
  get filename() {
    let arr = this._fullName.split('.')
    arr = arr.slice(0, -1).join('.')

    return arr
  }

  get extension() {
    return this._fullName.split('.').pop()
  }
  getContents() {
    return this._contents
  }
  write(str) {
    return (this._contents = !this._contents
      ? str
      : `${this._contents}\n${str}`)
  }
  gets() {
    let arr = this._contents.split('\n')
    this.cont++
    return arr[this.cont]
  }
  getc() {
    let arr2 = this._contents.split('')
    this.cont2++
    return arr2[this.cont2]
  }
}
const example = new File('example.1111.txt', '')
console.log(example.fullName)
example.filename = '1'
console.log(example.filename)
console.log(example.extension)
console.log(example.getContents())
console.log(example.write('1'))
console.log(example.write('2'))
console.log(example.write('3'))
console.log(example.write('4'))
console.log(example.gets())
console.log(example.gets())
console.log(example.gets())
console.log(example.gets())
console.log(example.gets())
console.log(example.gets())
console.log(example.gets())
console.log(example.gets())
console.log(example.getc())
console.log(example.getc())
console.log(example.getc())
console.log(example.getc())
console.log(example.getc())

console.log(example)
