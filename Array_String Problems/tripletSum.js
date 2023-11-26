let A=[1, 4, 45, 6, 10, 8];
let sum = 22

function find3Numbers(arr, sum){
	
	let len = arr.length

	for(let i=0; i<len-2; i++){

		// find pair in subarray arr(i+1, n-1)
		// with sum equal to sum - A[i]
		let s = new Set()
		let curr_sum = sum - arr[i]
		for(let j= i+1; j <len; j++){
			if(s.has(curr_sum-arr[j]))
				return true;
			s.add(arr[j])	
		}
	}
	return false
}

console.log(find3Numbers(A, sum))