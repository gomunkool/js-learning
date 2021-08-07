function tArea(tStr) {
  let arr = tStr.split(".");
  arr = arr.splice(0, arr.length - 1);
  let side = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "\n") {
      side = 0;
    }
    if (arr[i] === " ") {
      side = side + 1;
    }
  }
  return (side * side) / 2;
}

console.log(
  tArea(
    "\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n"
  )
);
