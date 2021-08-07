var rotateMatrix = (arr) => {
  let vertical = arr.length;
  let arrMatrix = [];
  for (let i = 0; i < arr[0].length; i++) {
    arrMatrix.push([]);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let y = arr[0].length - 1; y >= 0; y--) {
      // console.log(arr[i][y]);
      // console.log(arr[i].length - y - 1);
      arrMatrix[arr[i].length - y - 1].push(arr[i][y]);
    }
  }
  return arrMatrix;
};
rotateMatrix([
  [-1, 4, 5],
  [2, 3, 4],
]);

// [
//   [5, 4],
//   [4, 3],
//   [-1, 2],
// ];
