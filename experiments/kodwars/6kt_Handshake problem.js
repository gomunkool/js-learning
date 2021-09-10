function getParticipants(handshakes) {
  if (handshakes === 0) {
    return 1
  }
  let ferms = 0
  let per = 0
  let hend = 0
  while (hend < handshakes) {
    ferms++
    hend = hend + per
    per++
  }
  return ferms
}

getParticipants(7) //5
// getParticipants(11)
getParticipants(0)
// Test.assertEquals(getParticipants(1), 2)
// Test.assertEquals(getParticipants(3), 3)
// Test.assertEquals(getParticipants(6), 4)
// Test.assertEquals(getParticipants(7), 5)
