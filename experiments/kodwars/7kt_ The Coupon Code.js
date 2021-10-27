function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  currentDate = currentDate.split(' ')
  expirationDate = expirationDate.split(' ')
  let currentMonth
  let expirationMonth
  let currentDay = currentDate[1].split(',').join('').split('').join('')
  let expirationDay = expirationDate[1].split(',').join('').split('').join('')

  const year = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  for (let i = 0; i < year.length; i++) {
    if (currentDate[0] === year[i]) {
      currentMonth = i
    }
    if (expirationDate[0] === year[i]) {
      expirationMonth = i
    }
  }

  if (enteredCode === correctCode) {
    if (currentDate[2] < expirationDate[2]) {
      return true
    } else if (currentDate[2] === expirationDate[2]) {
      if (currentMonth < expirationMonth) {
        return true
      } else if ((currentMonth = expirationMonth)) {
        if (+currentDay <= +expirationDay) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}
console.log(
  checkCoupon('123a', '123', 'September 12, 2014', 'September 31, 2014')
)
