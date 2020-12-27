let namber = [9, 8, 7, 6];
let newNamber = [];

function get(num) {
  while (namber.length > 0) {
    let newNumber = namber[namber.length - 1];
    newNamber.push(newNumber);
    namber.splice(-1, 1);
  }
}
get(namber);
console.log(newNamber);
