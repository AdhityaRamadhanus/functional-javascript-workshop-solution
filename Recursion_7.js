function reduce(arr, fn, initial) {
  if (arr.length == 0) return initial
  return reduce(arr.slice(1, arr.length), fn, fn(initial,arr[0]))
}

module.exports = reduce
