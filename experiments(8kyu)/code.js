var word = "bottles";
var count = 99;
while (count > 0) {
  console.log(count + " " + word + " of beer on the wall");
  console.log(count + " " + word + " of beer,");
  console.log("Take one down, pass it around,");
  count = count - 1;
  if (count > 0) {
    console.log(count + " " + word + " of beer on the wall.");
  } else {
    console.log("No more " + word + " of beer on the wall.");
  }
}

if (scoops >= 5) {
  alert("Eat faster, the ice cream is going to melt!");
} else if (scoops == 3) {
  alert("Ice cream is running low!");
} else if (scoops == 2) {
  alert("Going once!");
} else if (scoops == 1) {
  alert("Going twice!");
} else if (scoops == 0) {
  alert("Gone!");
} else {
  alert("Still lots of ice cream left, come and get it.");
}
