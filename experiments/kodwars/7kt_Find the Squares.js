const findSquares = (num) => {
  let max = (num / 2 + 0.5) ** 2;
  let min = (num / 2 - 0.5) ** 2;

  return `${max}-${min}`;
};

findSquares(9);
