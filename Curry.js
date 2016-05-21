function curryN(fn,n){
  var exparg = n || fn.length;
  function currMe(arg){
    
  }
  return currMe;
}
var addTri = function (a,b,c) { return a+b+c};
var currTwo = addTri.bind(addTri,3);
var currOne = currTwo.bind(addTri,4);
var currOneL = currTwo.bind(addTri,100);
console.log(currOneL(5)+" "+currOne.length+" "+currTwo.length+" "+addTri.length);
module.exports = curryN;
