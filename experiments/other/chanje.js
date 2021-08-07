function usdcny(usd) {
  return ((usd * 675) / 100).toFixed(2) + " Chinese Yuan";
}

console.log(usdcny(15));
console.log(usdcny(465));
