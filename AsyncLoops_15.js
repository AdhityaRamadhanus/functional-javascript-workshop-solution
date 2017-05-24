function loadUsers(userIds, load, done) {
	let users = []
	for (let i = 0; i < userIds.length; i++){
		load(userIds[i], (user) => {
			if (user) {
				users.push(user)
			}
			if (users.length === userIds.length) done(users)
		})
	}
}

module.exports = loadUsers