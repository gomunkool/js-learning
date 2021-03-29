function findOutlier(integers) {
  let odd = [];
  let even = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i]);
    }

    if (integers[i] % 2 !== 0) {
      odd.push(integers[i]);
    }
  }
  if (odd.length > even.length) {
    return even[0];
  } else {
    return odd[0];
  }
}

console.log(findOutlier([2, 6, 8, 10, 3]));
