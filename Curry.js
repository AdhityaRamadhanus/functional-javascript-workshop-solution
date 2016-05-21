function curryN(fn,n){
  var n = n || fn.length;
  function CurryMe(a){
  	if (n <= 1){
  		return fn (a);
  	}
  	else{
  		return curryN(fn.bind(fn,a),n-1);
  	}
  }
  return CurryMe;
}
var addTri = function (a,b,c) { return a+b+c};
/*var currTwo = addTri.bind(addTri,3);
var currOne = currTwo.bind(addTri,4);
var currOneL = currTwo.bind(addTri,100);*/
//console.log(currOneL(5)+" "+currOne.length+" "+currTwo.length+" "+addTri.length);


var currN = curryN(addTri,3);
var currTwo = currN(3);
var currOne = currTwo(4);
console.log(currOne.length+" "+currTwo.length+" "+currN.length);

module.exports = curryN;
