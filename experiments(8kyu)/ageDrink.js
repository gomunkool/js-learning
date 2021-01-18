function peopleWithAgeDrink(old) {
  let age;
  if (old < 14) {
    age = "drink toddy";
  } else if (old >= 14 && old < 18) {
    age = "drink coke";
  } else if (old >= 18 && old < 21) {
    age = "drink beer";
  } else {
    age = "drink whisky";
  }
  return age;
}

console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(30));
