function getDrinkByProfession(param) {
  let rez;
  param = param.toLowerCase();
  if (param == "jabroni") {
    rez = "Patron Tequila";
  } else if (param == "school counselor") {
    rez = "Anything with Alcohol";
  } else if (param == "programmer") {
    rez = "Hipster Craft Beer";
  } else if (param == "bike gang member") {
    rez = "Moonshine";
  } else if (param == "politician") {
    rez = "Your tax dollars";
  } else if (param == "rapper") {
    rez = "Cristal";
  } else {
    rez = "Beer";
  }
  return rez;
}

console.log(getDrinkByProfession("jabrOni"));
console.log(getDrinkByProfession("scHOOl counselor"));
console.log(getDrinkByProfession("prOgramMer"));
console.log(getDrinkByProfession("bike ganG member"));
console.log(getDrinkByProfession("poLiTiCian"));
console.log(getDrinkByProfession("rapper"));
console.log(getDrinkByProfession("pundit"));
console.log(getDrinkByProfession("Pug"));
