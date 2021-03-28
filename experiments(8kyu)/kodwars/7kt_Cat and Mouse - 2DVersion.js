function catMouse(map, moves) {
  let arrMap = map.split("");

  let MX;
  let MY;
  let CX;
  let CY;
  let x = 0;
  let y = 0;
  for (let i = 0; i < arrMap.length; i++) {
    if (arrMap[i] === ".") {
      x += 1;
    }
    if (arrMap[i] === "\n") {
      x = 0;
      y += 1;
    }
    if (arrMap[i] === "C") {
      x += 1;
      CX = x;
      CY = y;
    }
    if (arrMap[i] === "m") {
      x += 1;
      MX = x;
      MY = y;
    }
  }
  let xRaz = Math.abs(MX - CX);
  let yRaz = Math.abs(MY - CY);
  let len = xRaz + yRaz;
  if (len <= moves) {
    return "Caught!";
  }
  if (len > moves) {
    return "Escaped!";
  } else {
    return "boring without two animals";
  }
}
var map = `..C......
           .........
           ....m....`;
console.log(catMouse(map, 5));
