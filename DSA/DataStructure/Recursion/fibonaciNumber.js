function fibonacciIterative(n) {
	let array = [0, 1]
	for (let i =2; i < n +1; i++) {
	  array.push(array[i - 1] + array[i - 2])
	}
	return array[n]
  }
  
  function fibonacciRecursive(n) {
	if(n < 2) {
	  return n
	}
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
  }