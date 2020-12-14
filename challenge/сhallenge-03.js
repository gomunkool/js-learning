let namber = 21;
if (namber <= 100 && namber >= -100) {
  if (namber % 2 == 0) {
    console.log("even");
  } else console.log("odd");
  if (namber > -10 && namber < 10) {
    console.log("one-bit");
  } else if (
    (namber >= 10 && namber < 100) ||
    (namber > -100 && namber <= -10)
  ) {
    console.log("two-bit");
  } else {
    console.log("three-bit");
  }
  if (namber < 0) {
    console.log("negativ");
  } else if (namber > 0) {
    console.log("positiv");
  } else {
    console.log("namber = 0");
  }
  let max = 100;
  for (i = 2; i < max; i++) {
    for (let j = 2; j < max; j++) {
      if (i % j == 0) {
        console.log(i);
      }
    }
  }
}
