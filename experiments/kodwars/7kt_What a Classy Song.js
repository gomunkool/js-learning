class Song {
  constructor(title, artist) {
    this.title = title
    this.artist = artist
    this.people = []
  }
  howMany(arr) {
    console.log(arr)
    arr = arr.map((item) => item.toLowerCase())
    console.log(arr)
    let x = 0
    for (let i = 0; i < arr.length; i++) {
      if (!this.people.includes(arr[i])) {
        x++
        this.people.push(arr[i])
      }
    }
    return x
  }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose')

console.log(mountMoose.title)
console.log(mountMoose.artist)
console.log(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']))

console.log(
  mountMoose.howMany([
    'John',
    'Fred',
    'Bob',
    'Carl',
    'RyAn',
    'fdsdfsdf',
    'fsdgfds',
  ])
)
console.log(mountMoose.people)
