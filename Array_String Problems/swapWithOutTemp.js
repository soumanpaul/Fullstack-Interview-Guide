let a = 5
let b = 3

function swap(a,b){
	b = b-a
	a = a+b
	b = a-b
	
	return [a,b];
}

console.log(swap(a,b));

function swapBitWise(a,b){
	a = a ^ b
	b = a ^ b
	a = a ^ b

	return [a,b]
}

console.log(swapBitWise(4,9))