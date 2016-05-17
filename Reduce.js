function countWords(inputWords){
  var Counts = {};
  inputWords.reduce(function (prev,curr,idx,array){
    if (Counts[curr.toString()] == undefined){
      Counts[curr.toString()]=1;
    }
    else{
      //console.log(curr+" "+Counts[curr.toString()]);
      Counts[curr.toString()]++;
    }
  },{});
  return Counts;
}
//var input = [ 'sint', 'ea', 'laborum', 'culpa', 'ea', 'magna', 'do', 'cupidatat', 'magna', 'ex', 'veniam', 'magna', 'lorem', 'duis', 'ad', 'exercitation', 'id', 'sunt', 'excepteur', 'deserunt', 'ad', 'deserunt', 'et', 'duis', 'incididunt', 'nisi', 'amet', 'eu', 'ea', 'qui', 'amet', 'irure', 'excepteur', 'culpa', 'cupidatat', 'elit', 'veniam', 'velit', 'duis', 'amet', 'laboris', 'aliqua', 'laborum', 'reprehenderit', 'officia', 'cupidatat', 'irure', 'est', 'laborum', 'voluptate', 'do', 'laborum', 'tempor'];
//countWords(input);

module.exports = countWords;
