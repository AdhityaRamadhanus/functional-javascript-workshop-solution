function curryN (fn, n) {
  n = n || fn.length
  function curryMe (f) {
  	if (n <= 1) return fn (f)
	return curryN(fn.bind(fn, f), n-1)
  }
  return curryMe
}

module.exports = curryN