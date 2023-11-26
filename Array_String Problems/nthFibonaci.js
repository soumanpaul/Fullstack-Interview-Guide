
function NthFibonaci(n){
	let fibo=[0,1]
	
	for(let i=2; i<=n; i++){
		fibo[i] = fibo[i-1]+fibo[i-2]
	}
	return fibo[n];
}

console.log(NthFibonaci(20))

// Recursion
function fibonacci(n){
	if(n<=1)
		return n;
	else
		return fibonacci(n-1)+fibonacci(n-2);	
}

console.log(fibonacci(20))