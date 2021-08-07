function century(year) {
  let vek;
  if (year > 0 && year <= 100) {
    vek = 1;
  } else if (year > 100 && year <= 200) {
    vek = 2;
  } else if (year > 200 && year <= 300) {
    vek = 3;
  } else if (year > 300 && year <= 400) {
    vek = 4;
  } else if (year > 400 && year <= 500) {
    vek = 5;
  } else if (year > 500 && year <= 600) {
    vek = 6;
  } else if (year > 600 && year <= 700) {
    vek = 7;
  } else if (year > 700 && year <= 800) {
    vek = 8;
  } else if (year > 800 && year <= 900) {
    vek = 9;
  } else if (year > 900 && year <= 1000) {
    vek = 10;
  } else if (year > 1000 && year <= 1100) {
    vek = 11;
  } else if (year > 1100 && year <= 1200) {
    vek = 12;
  } else if (year > 1200 && year <= 1300) {
    vek = 13;
  } else if (year > 1300 && year <= 1400) {
    vek = 14;
  } else if (year > 1400 && year <= 1500) {
    vek = 15;
  } else if (year > 1500 && year <= 1600) {
    vek = 16;
  } else if (year > 1600 && year <= 1700) {
    vek = 17;
  } else if (year > 1700 && year <= 1800) {
    vek = 18;
  } else if (year > 1800 && year <= 1900) {
    vek = 19;
  } else if (year > 1900 && year <= 2000) {
    vek = 20;
  } else if (year > 2000 && year <= 2100) {
    vek = 21;
  }
  return vek;
}

console.log(century(1111));
console.log(century(111));
console.log(century(1511));
console.log(century(11));
console.log(century(711));
console.log(century(2001));
