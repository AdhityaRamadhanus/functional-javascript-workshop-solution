var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);
module.exports = slice;