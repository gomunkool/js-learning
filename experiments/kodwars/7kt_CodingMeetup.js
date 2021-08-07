function isSameLanguage(list) {
  let lang = list[0].language;
  for (let i = 1; i < list.length; i++) {
    if (list[i].language !== lang) {
      return false;
    }
  }
  return true;
}

console.log(isSameLanguage(list2));

var list2 = [
  {
    firstName: "Mariami",
    lastName: "G.",
    country: "Georgia",
    continent: "Europe",
    age: 29,
    language: "Python",
  },
  {
    firstName: "Mia",
    lastName: "H.",
    country: "Germany",
    continent: "Europe",
    age: 39,
    language: "Python",
  },
  {
    firstName: "Maria",
    lastName: "I.",
    country: "Greece",
    continent: "Europe",
    age: 32,
    language: "Python",
  },
];
