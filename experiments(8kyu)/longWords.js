function findShort(s) {
  let arr = s.split(" ");
  let minLong = 100000000;
  let minStr;
  for (let i = 0; i < arr.length; i++) {
    if (minLong > arr[i].length) {
      minLong = arr[i].length;
      minStr = arr[i];
    }
  }
  return minLong;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
