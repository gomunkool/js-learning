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
let objekt;
if (capitals.length === undefined) {
  let stateCountry;
  let cap = capitals["capital"];
  if ("state" in capitals) {
    stateCountry = capitals["state"];
  }
  if ("country" in capitals) {
    stateCountry = capitals["country"];
  }
  return [`The capital of ${stateCountry} is ${cap}`];
} else {
  for (let i = 0; i < capitals.length; i++) {
    objekt = capitals[i];
  }
  if ("state" in objekt) {
    return ["The capital of " + objekt["state"] + " is " + objekt["capital"]];
  }
  if ("country" in objekt) {
    return ["The capital of " + objekt["country"] + " is " + objekt["capital"]];
  }
}
