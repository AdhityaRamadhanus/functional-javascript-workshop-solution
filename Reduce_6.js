module.exports = (words) => {
  let Table = {}
  words.reduce((table, word) => {
    if (!table[word.toString()]) table[word.toString()]=1
    else table[word.toString()]++
    return table
  }, Table)
  return Table
}
