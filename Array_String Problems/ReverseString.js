
let str = 'you are a nice dude'

function reverse(str){
	if(str==="") return '';
	return reverse(str.substr(1)) + str.charAt(0);
}

// built in
function reverse(str){
	if(!str || str.length <2) return str;	
	return str.split('').reverse().join('');
}

// Add to Prototype
String.prototype.reverse = function (){
	if(!this || this.length <2) return this;
	return this.split('').reverse().join('');
}

console.log(reverse(str))
console.log(str.reverse())

describe("String Reversal", () => {
	it("Should reverse string", () => {
	 assert.equal(reverse("Hello World!"), "!dlroW olleH");
	});
});