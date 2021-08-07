function runYourString(arg, obj) {
  const func = new Function(obj.param, obj.func);

  return func(arg);
}

console.log(runYourString(true, { param: "val", func: "return val" }));

// let func = new Function([arg1, arg2, ...argN], functionBody);

let funk = (val) => {
  return val;
};
