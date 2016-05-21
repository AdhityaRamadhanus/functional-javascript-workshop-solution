function getDependencies(tree){
	function solve(dependencies){
		console.log(dependencies);
		for (var moduleName in Object.keys(dependencies)){
			console.log(moduleName);
		}
	}
	console.log(tree);
	return solve(tree.dependencies);
}

module.exports = getDependencies;