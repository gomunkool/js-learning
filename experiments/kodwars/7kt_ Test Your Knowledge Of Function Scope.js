function curry(f) {
  console.log("1");
  return function (a) {
    console.log("2");

    return function (b) {
      console.log("3");

      return f(a, b);
    };
  };
}

function sum(a, b) {
  console.log("4");

  return a + b;
}

let add = curry(sum);

add(2)(5);
