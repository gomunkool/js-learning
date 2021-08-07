var passengers = [
  { name: "Jane Doloop", paid: true },
  { name: "Dr. Evel", paid: true },
  { name: "Sue Property", paid: false },
  { name: "John Funcall", paid: true },
];

function printPassenger(passenger) {
  var message = passenger.name;
  if (passenger.paid === true) {
    message = message + " has paid";
  } else {
    message = message + " has not paid";
  }
  console.log(message);
  return false;
}
processPassengers(passengers, printPassenger);
