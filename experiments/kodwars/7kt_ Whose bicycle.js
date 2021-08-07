function whoseBicycle(diary1, diary2, diary3) {
  let ferstSan = 0;
  let secondSan = 0;
  let therdSan = 0;

  for (key in diary2) {
    ferstSan += diary1[key];
  }
  for (key in diary2) {
    secondSan += diary2[key];
  }
  for (key in diary3) {
    therdSan += diary3[key];
  }
  if (ferstSan > secondSan && ferstSan > therdSan) {
    return "I need to buy a bicycle for my first son.";
  }
  if (secondSan >= ferstSan && secondSan > therdSan) {
    return "I need to buy a bicycle for my second son.";
  }
  if (therdSan >= ferstSan && therdSan >= secondSan) {
    return "I need to buy a bicycle for my third son.";
  }
}

whoseBicycle(
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 8,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 6,
    history: 5,
    physics: 5,
    geography: 9,
    chemistry: 10,
  }
);
// 'I need to buy a bicycle for my second son.'
