module.exports = (goodUsers) => {
	return (submittedUsers) => {
		return submittedUsers.every((submittedUser) => goodUsers.some((goodUser) => goodUser.id === submittedUser.id))
	}
}