function killer(suspectInfo, dead) {
  let baza = suspectInfo;
  for (let i = 0; i < dead.length; i++) {
    for (let key in baza) {
      // console.log(suspectInfo[key]);
      let availability = baza[key].includes(dead[i]);
      if (availability === false) {
        delete baza[key];
      }
    }
  }
  for (let key in baza) {
    return key;
  }
}

console.log(
  killer(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
);
//arr.includes(item, from)
