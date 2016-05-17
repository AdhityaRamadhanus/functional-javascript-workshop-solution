function doubleAll(numbers){
	return Array.prototype.map.call(numbers,
		function (e){ return e*2;});
}

module.exports = doubleAll;