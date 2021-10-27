function unluckyDays(year) {
  let obj13 = {
    January: 13,
    February: 13,
    March: 13,
    April: 13,
    May: 13,
    June: 13,
    July: 13,
    August: 13,
    September: 13,
    October: 13,
    November: 13,
    December: 13,
  }
  let res = 0
  for (month in obj13) {
    let date = new Date(`${month} ${'13'}, ${year}`)
    let day = date.getDay()
    if (day == 5) {
      res++
    }
  }
  return res
}
console.log(unluckyDays(2819))
