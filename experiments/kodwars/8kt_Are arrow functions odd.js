function odds(values) {
  return values.filter((e) => (e % 2 !== 0 ? 1 : 0));
}
odds([1, 2, 3, 4, 5, 6]);
