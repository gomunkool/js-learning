function euclideanDistance(point1, point2) {
  let sum = 0;
  for (let i = 0; i < point1.length; i++) {
    let y = (point2[i] - point1[i]) ** 2;
    sum += y;
  }
  return Math.abs(Math.round(Math.sqrt(sum) * 100) / 100);
}

euclideanDistance([-1, 2, 5, 6, 7], [2, 4, 9, 8, 9]);
