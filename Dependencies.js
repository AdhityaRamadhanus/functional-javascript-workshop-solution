function getDependencies(tree){
	if (tree != undefined && tree.dependencies != undefined){
		var dependencies = tree.dependencies;
		var ans = [];
		Object.keys(dependencies).forEach(function (key){
			var moduleName = key+"@"+dependencies[key].version;
			//console.log(moduleName);
			ans = ans.concat([moduleName],getDependencies(dependencies[key]));
		});
		return ans.filter(function (elmt,idx,arr){
			return arr.indexOf(elmt) === idx;
		}).sort();
	}
	else{
		return [];
	}
}

module.exports = getDependencies;
