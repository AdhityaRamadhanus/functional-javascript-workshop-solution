function repeat(operation,num){
	return function (){
		if (num < 0) return;
		operation();
		return repeat(operation,num-1);}; 
}
function trampoline(fn){
	while(fn === 'function'){
		fn=fn();
	}
}
module.exports = function (operation,num){
	trampoline(repeat(operation,num));
}