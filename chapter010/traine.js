let passenger = {
  ticket: "firstclass",
};

function createDrinkOrder(passenger) {
  var orderFunction;
  // console.log("1");
  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      // console.log("2");
      console.log("Would you like a cocktail or wine?");
      // console.log("3");
    };
  } else {
    orderFunction = function () {
      console.log("Your choice is cola or water.");
    };
  }
  return orderFunction;
}

function serveCustomer(passenger) {
  console.log(getDrinkOrderFunction);
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  getDrinkOrderFunction();
  console.log(getDrinkOrderFunction);
  // Предложить обед
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  // Включить кино
  getDrinkOrderFunction();
  // Забрать мусор
}

console.log(serveCustomer(passenger));
