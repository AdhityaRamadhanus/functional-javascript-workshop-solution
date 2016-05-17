function reduce(arr,fn,initial){
  if (arr.length == 0) return initial;
  return reduce(arr.slice(1,arr.length),fn,fn(initial,arr[0]));
}

//console.log(reduce([1,2,3],function (prev,curr){ return prev+curr;},0));

module.exports = reduce;
