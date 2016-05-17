function logger(namespace){
	return function(){
		var arr = Array.from(arguments);
		console.log.apply(console,[namespace].concat(arr));
	}
}

module.exports = logger;