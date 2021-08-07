function DNAStrand(dna) {
  let arr = dna.split("");
  let arrRez = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      arrRez.push("T");
    }
    if (arr[i] === "T") {
      arrRez.push("A");
    }
    if (arr[i] === "C") {
      arrRez.push("G");
    }
    if (arr[i] === "G") {
      arrRez.push("C");
    }
  }
  return arrRez.join();
}

console.log(DNAStrand("ATTGC"));
