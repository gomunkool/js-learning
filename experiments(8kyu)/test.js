const obj = {
  name: "Vadim",
  famely: "Moroz",

  age: 32,
  alcohol: function (maturete = 18) {
    if (this.age >= maturete) {
      return "I can drink";
    } else {
      return "I can't drink";
    }
  },
};
console.log(obj.alcohol());

function alcohol(age, maturete = 18) {
  if (age >= maturete) {
    return "I can drink";
  } else {
    return "I can't drink";
  }
}
console.log(alcohol(21));
