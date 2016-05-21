function loadUsers(userIds,load,done){
	var users = [];
	for (var i =0;i<userIds.length;i++){
		load(userIds[i],function (user){
			if (user){
				users.push(user);
			}
		});
	}
	done(users);
}

module.exports = loadUsers;