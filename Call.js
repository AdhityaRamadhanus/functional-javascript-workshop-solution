function duckCount(){
  var arr = Array.from(arguments);
  console.log(arr);
  return arr.reduce(function (prev,curr,idx,array){
    if (Object.prototype.hasOwnProperty.call(curr,'quack')){
      return prev+1;
    }
    else{
      return prev;
    }
  },0);
}
console.log(duckCount(1,{quack : 4},3,4,5));
module.exports = duckCount;
