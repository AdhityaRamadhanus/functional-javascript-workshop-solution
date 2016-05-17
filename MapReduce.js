module.exports = function arrayMap(arr,fn){
	return arr.reduce(function (prev,curr){
		prev.push(fn(curr));
		return prev;
	},[]);
}