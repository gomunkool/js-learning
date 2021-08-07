function capital(capitals) {
  let obj = capitals;
  console.log(obj);
  for (let key in obj) {
    console.log(key);
  }
}

state_capitals = [{ state: "Maine", capital: "Augusta" }];
console.log(capital(state_capitals));

country_capitals = [{ country: "Spain", capital: "Madrid" }];
console.log(capital(country_capitals));

mixed_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
];

console.log(capital(mixed_capitals)[1]);

//let arr = [
// "The capital of Maine is Augusta",
// "The capital of Maine is Augusta",
//];

//let objekt;

//for (let i = 0; i < capitals.length; i++) {
//  objekt = capitals[i];
//}
//if ("state" in objekt) {
// return "The capital of " + objekt["state"] + " is " + objekt["capital"];
//}
//if ("country" in objekt) {
// return "The capital of " + objekt["country"] + " is " + objekt["capital"];
//}
