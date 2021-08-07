function enough(cap, on, wait) {
  let freePlase = cap - on;
  if (freePlase >= wait) {
    return 0;
  } else {
    return wait - freePlase;
  }
}

console.log(enough(10, 5, 5));
console.log(enough(100, 5, 5));
console.log(enough(10, 5, 23));
console.log(enough(10, 5, 7));
console.log(enough(10, 7, 5));
