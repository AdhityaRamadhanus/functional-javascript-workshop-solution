function Spy(target, method) {
	let spy = { count : 0 }
	let oldFn = target[method]
	target[method] = function (){
		spy.count++
		return oldFn.apply(this, arguments)
	}
	return spy
}
module.exports = Spy