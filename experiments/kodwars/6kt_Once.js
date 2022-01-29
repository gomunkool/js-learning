function once(fn) {
  logOnce = null
  return fn
}

logOnce = once(console.log)
console.log(logOnce)
logOnce('foo') // -> "foo"
logOnce('bar') // -> no effect
