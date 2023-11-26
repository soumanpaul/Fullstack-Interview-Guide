
function topSum(arr){
	var big = Math.max(arr[0], arr[1])
	var secBig = Math.min(arr[0], arr[1])

	var len = arr.length

	for(let i=2; i< len; i++){
		
		if(arr[i] > big){
			secBig = big;
			big = arr[i];
		} 
		else if(arr[i] > secBig) secbig = arr[i];

	}
	return big+secBig;
}

console.log(topSum([2,1,7,9]))