function getDependencies(tree) {
	if (tree && tree.dependencies) {
		let dependencies = tree.dependencies
		let ans = []
		Object.keys(dependencies).forEach((key) => {
			var moduleName = `${key}@${dependencies[key].version}`
			ans = ans.concat([moduleName], getDependencies(dependencies[key]))
		})
		return ans.filter((elmt, idx, arr) => arr.indexOf(elmt) === idx).sort()
	}
	return []
}

module.exports = getDependencies
