// lApproach: The approach is pretty simple. We will use 0 as a pivot element
//  and whenever we see a non zero element we will swap it with the pivot element.

let A = [5, 6, 0, 4, 6, 0, 9, 0, 8];


function swap(arr, a,b){
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function moveAllZero(arr){
	let j=0;
	for(let i=0; i< arr.length; i++){
		if(arr[i] !=0) {
			swap(arr,j,i);
			j++;
		}
	}
	return arr;
}

console.log(moveAllZero(A))