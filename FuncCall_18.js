const unboundSlice = Array.prototype.slice
const slice = Function.prototype.call.bind(unboundSlice)
module.exports = slice