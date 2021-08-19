var justAVar = "Oh, don't you worry about it, I'm GLOBAL";
console.log(1);

function whereAreYou() {
  console.log(2);

  var justAVar = "Just an every day LOCAL";
  function inner() {
    console.log(3);

    return justAVar;
  }
  console.log(4);

  return inner;
}
console.log(5);

var innerFunction = whereAreYou();
console.log(6);
var result = innerFunction();
console.log(result);
