function convertHashToArray(hash) {
  let i = 0;
  let arr = [];
  for (let key in hash) {
    // console.log(i);
    // console.log(key);
    // console.log(hash[key]);
    arr.push([]);
    arr[i].push(key);
    arr[i].push(hash[key]);
    i++;
  }
  return arr.sort();
}

convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" });

// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
