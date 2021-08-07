var Calculator = {
  average: function (...arg) {
    if (arg.length > 0) {
      let summ = 0;
      for (let i = 0; i < arg.length; i++) {
        summ += arg[i];
      }
      return summ / arg.length;
    } else {
      return 0;
    }
  },
};

Calculator.average(3, 4, 5);
