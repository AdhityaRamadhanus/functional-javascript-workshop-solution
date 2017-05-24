function duckCount() {
  let arr = Array.from(arguments)
  let isQuack = Object.prototype.hasOwnProperty
  let quacks = arr.reduce((prev, curr) => (isQuack.call(curr, 'quack') ? prev+1 : prev), 0)
  return quacks
}
module.exports = duckCount
