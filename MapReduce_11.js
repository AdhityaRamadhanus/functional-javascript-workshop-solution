module.exports = (arr, fn) => arr.reduce((prev, curr) => {
	prev.push(fn(curr))
	return prev
}, [])
