// Minimum swaps required to bring all elements less than or equal to k together
// Sliding window , two pointer

let arr = [ 2, 7, 9, 5, 8, 7, 4], k = 5;

function minSwap(arr, k){
	
	let count =0;
	let snowball = 0;

	for(let i=0; i< arr.length; i++){
		if(arr[i] > k)
			snowball++;
		else if(snowball > 0){
			let temp = arr[i];
			arr[i] = arr[i-snowball]
			arr[i-snowball] = temp;

			count++;
		}	
	}
	return count;
}

console.log(minSwap(arr, k))