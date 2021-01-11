function dayOfWeek(x) {
  let day;
  if (x == 1) {
    day = "monday";
  }
  if (x == 2) {
    day = "tuesday";
  }
  if (x == 3) {
    day = "wednesday";
  }
  if (x == 4) {
    day = "thursday";
  }
  if (x == 5) {
    day = "friday";
  }
  if (x == 6) {
    day = "saturday";
  }
  if (x == 7) {
    day = "sunday";
  }
  return day;
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(5));
console.log(dayOfWeek(3));
console.log(dayOfWeek(2));
console.log(dayOfWeek(1));
