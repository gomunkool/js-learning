function past(h, m, s) {
  let hour;
  let minute;
  let second;
  if (h >= 0 && h <= 23) {
    hour = h * 3600000;
  }
  if (m >= 0 && m <= 59) {
    minute = m * 60000;
  }
  if (s >= 0 && s <= 59) {
    second = s * 1000;
  }

  let summa = hour + minute + second;
  return summa;
}

console.log(past(1, 3, 3));
console.log(past(2, 1, 0));
console.log(past(1, 3, 3));
console.log(past(4, 5, 11));
