const result = sum(1, 2);
function sum(a, b) {
  const result = a + b;
  return result;
}
console.log(result);
console.log(sum(3, 4));

var age = 7;
function test(age) {
  age = age + 1;
  console.log(age);
  if (age < 18) {
    return false;
  }
  return true;
}
console.log(test(age));
console.log(age);
