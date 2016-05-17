function checkUsersValid(goodUsers) {
  console.log(goodUsers);
  return function allUsersValid(submittedUsers) {
  	//console.log(submittedUsers);
  	return submittedUsers.every(function (e){
  		return goodUsers.some(function (egood){ 

  			return e.id ==egood.id ;});
  	});
  };
}

var goodUsers = [ {id : 1},{id: 2},{id: 3}];
var testAllValid = checkUsersValid(goodUsers);
console.log(testAllValid([{id: 2},{id: 1}]));

module.exports = checkUsersValid