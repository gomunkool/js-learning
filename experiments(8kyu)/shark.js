function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let timeYou = pontoonDistance / youSpeed;
  let timeShark = sharkDistance / sharkSpeed;
  if (dolphin === true) {
    timeShark = timeShark * 2;
  }

  if (timeYou <= timeShark) {
    return "Alive!";
  } else if (timeYou > timeShark) {
    return "Shark Bait!";
  }
}

console.log(shark(12, 50, 4, 8, true)); //, "Alive!"); //shark 12.5, you 3
console.log(shark(7, 55, 4, 16, true)); //, "Alive!");
console.log(shark(24, 0, 4, 8, true)); //, "Shark Bait!");
console.log(shark(24, 25, 4, 8, true));
console.log(shark(24, 0, 4, 8, true));
console.log(shark(24, 0, 4, 8, true));
