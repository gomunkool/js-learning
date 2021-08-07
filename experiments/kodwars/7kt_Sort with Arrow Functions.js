var OrderPeople = function (people) {
  people.sort((a, b) => (a.age > b.age ? 1 : -1));
  return people;
};

OrderPeople([
  { age: 3, name: "joel" },
  { age: 2, name: "roger" },
  { age: 1, name: "vinny" },
  { age: 3, name: "don" },
  { age: 5, name: "brendan" },
]);
