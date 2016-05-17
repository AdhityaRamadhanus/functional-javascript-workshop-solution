function Spy(target,method){
	var spy = {count : 0};
	var oldFn = target[method];
	target[method] = function (){
		spy.count++;
		return oldFn.apply(this,arguments);
		//console.log(this.privcount);
	};
	return spy;
}
//var spy = Spy(console,'error');
//console.error('YOI GAN');
//console.error('YOI GAN');
//console.error('YOI GAN');
//console.log(spy.count);
module.exports = Spy;