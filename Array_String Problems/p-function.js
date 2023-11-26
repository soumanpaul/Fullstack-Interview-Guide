const fn = (a, x, y) => {
	console.log(x, y)
};

var hero = {
	_name: "Souman paul",
	getIdentity: function () {
		return this._name;
	}
}

const identity = hero.getIdentity()

console.log(identity()) // undefined , identity() invoked in lobal context
