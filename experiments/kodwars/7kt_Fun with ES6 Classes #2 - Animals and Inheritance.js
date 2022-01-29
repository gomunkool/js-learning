class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name
    this.age = age
    this.legs = legs
    this.species = species
    this.status = status
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status)
    this.name = name
    this.age = age
    this.legs = 0
    this.species = 'shark'
    this.status = status
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status)
    this.name = name
    this.age = age
    this.legs = 4
    this.species = 'cat'
    this.status = status
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status)
    this.name = name
    this.age = age
    this.legs = 4
    this.species = 'dog'
    this.status = status
    this.master = master
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}
var cathy = new Cat('Cathy', 7, 'Playing with a ball of yarn')
const billy = new Shark('Billy', 3, 'Alive and well')
var doug = new Dog('Doug', 12, 'Serving his master', 'Eliza')
console.log(doug.master)
console.log(doug.introduce())
console.log(doug.greetMaster())
