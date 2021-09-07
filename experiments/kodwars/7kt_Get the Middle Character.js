function getMiddle(s) {
  const arr = s.split('')
  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)]
  }
  if (arr.length % 2 === 0) {
    let two = arr[arr.length / 2]
    let one = arr[arr.length / 2 - 1]
    return one + two
  }
}
getMiddle('testting')
