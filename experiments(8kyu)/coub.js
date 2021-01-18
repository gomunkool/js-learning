function iceBrickVolume(radius, bottleLength, rimLength) {
  let height = bottleLength - rimLength;
  let s = Math.pow(radius * 2, 2) / 2;
  let volume = height * s;
  return volume;
}

console.log(iceBrickVolume(1, 10, 2));
console.log(iceBrickVolume(5, 30, 7));
