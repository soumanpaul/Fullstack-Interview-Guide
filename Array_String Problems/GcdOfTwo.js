// Recusion

function gcd(a, b) {
	if(b==0) return a;
	return gcd(b, a%b)
}


const gcdOfTwo = function (a, b) {

	let gcd=1;
	if(a<2 || b<2) return 1;

	for(let i = 2; i <= Math.min(a,b); i++){
		if(a%i == 0 && b%i==0){
			gcd=Math.max(i,gcd);
		}
	}
	return gcd;
}

console.log(gcdOfTwo(4,8))