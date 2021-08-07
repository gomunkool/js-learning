function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

console.log(formatMoney(3.44));

console.log(formatMoney(3.4534534));
console.log(formatMoney(3));
