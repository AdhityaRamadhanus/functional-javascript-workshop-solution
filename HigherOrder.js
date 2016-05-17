function repeat(f,n){
	if (n>0){
		f();
		repeat(f,n-1);
	}
}

module.exports = repeat;