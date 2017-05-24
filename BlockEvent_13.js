function repeat(operation, num) {
	if (num <= 0) return
	operation()
	setImmediate(() => repeat(operation,num-1), 100)
}

module.exports = repeat