let userInfo = {
  name: "Vasia",
  age: 30,
  //58: "znach",
  //ShowInfo() {
  //  console.log(`${this.name}`);
  //},
};

//let user = userInfo;

//userInfo = null;
//user.ShowInfo();
//console.log(userInfo[58]);

//for (const key in userInfo) {
//  const value = userInfo[key];
//}
//console.log(value);
console.log(userInfo);
userInfo.name = "Lena";
console.log(userInfo);
delete userInfo.name;
console.log(userInfo);
