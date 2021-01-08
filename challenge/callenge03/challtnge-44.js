let number = [1, 2, 4, 0, 0, 34, 2, 0, 123, 0, 1];

function count(num) {
  let i = 0;
  let summa = [];
  while (i < number.length) {
    if (number[i] === 0) {
      summa.push(number[i]);
    }
    i = i + 1;
  }
  console.log(summa.length);
}

count(number);
