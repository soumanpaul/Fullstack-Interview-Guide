const isPrime = require('./isPrime')

function PrimeFactor(num){
	let arr=[]
	for(var i =2; i < num; i++) {
		if(isPrime(i)) arr.push(i);		
	}
	return arr;
}

console.log("PrimeFactor", PrimeFactor(10))

