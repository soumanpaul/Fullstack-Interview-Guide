let arr = [5, 2, 6, 1, 3]

function missingNumber(arr) {
	var len = arr.length+1
	var sum =0;
	var expSum = len*(len+1)/2;

	for(let i=0; i<len-1; i++){
		sum+= arr[i];
	}
	return expSum - sum;
}

console.log(missingNumber(arr))