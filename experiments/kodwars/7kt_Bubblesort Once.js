function bubblesortOnce(a) {
  let s = [];
  for (let i = 0; i < a.length; i++) {
    s.push(a[i]);
  }
  for (let y = 0; y < s.length; y++) {
    if (s[y] > s[y + 1]) {
      let swap = s[y];
      s[y] = s[y + 1];
      s[y + 1] = swap;
    }
  }

  return s;
}

bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]);
