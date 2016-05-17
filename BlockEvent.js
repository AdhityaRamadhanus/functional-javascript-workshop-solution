function repeat(operation,num){
	if (num <= 0) return;
	operation();
	setImmediate(function (){ return repeat(operation,num-1);},100);
}

//repeat(function(){ console.log("HELLO WORLD")},20);
module.exports = repeat;