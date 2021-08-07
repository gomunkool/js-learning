function getMatrix(number) {
  let arrMatrix = [];
  for (let i = 0; i < number; i++) {
    arrMatrix.push([]);
    for (let y = 0; y < number; y++) {
      if (i === y) {
        arrMatrix[i].push(1);
      } else {
        arrMatrix[i].push(0);
      }
    }
  }
  return arrMatrix;
}

getMatrix(20);
