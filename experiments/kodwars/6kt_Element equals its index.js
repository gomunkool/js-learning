function indexEqualsValue(a) {
  let index = -1;
  let coun = [];
  let left = -1;
  let right = a.length;
  while (right - left > 1) {
    const mid = Math.floor((right + left) / 2);

    if (a[mid] === mid) {
      if (index === -1) {
        index = mid;
      } else if (index > mid) {
        index = mid;
      }
      right = mid;
    } else if (a[mid] > mid) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return index;
}

console.log(indexEqualsValue([-1, 0, 1, 3, 4, 5, 7, 8, 9, 10]));
