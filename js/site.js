var ninjaFunction = function () {
	var ninja = {};
	ninja.skills = "swords";
	return ninja;
};

ninjaFunction.altName = "The ninja function";

console.log(ninjaFunction);
console.log(ninjaFunction.altName);

var newNinja = ninjaFunction();

console.log(newNinja);