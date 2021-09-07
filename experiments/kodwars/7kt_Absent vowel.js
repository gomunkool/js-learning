function absentVowel(x) {
  const per = ['A', 'E', 'I', 'O', 'U']
  let arr = x.toUpperCase().split('')

  for (let i = 0; i < per.length; i++) {
    let res = arr.includes(per[i])
    if (!res) return i
  }
}

absentVowel('John Doe hs seven red pples under his bsket')
