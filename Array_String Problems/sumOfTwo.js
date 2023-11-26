let arr =[6,4,3,2,1,7]

function sumFinder(arr, sum) {
	var len = arr.length
	let differ= {}
	let substruct;

	for(let i=0; i < len; i++){
		substruct = sum - arr[i];

		if(differ[substruct])
			return true;
		differ[arr[i]] = true;	
	}
	return false;
}

console.log(sumFinder(arr, 9))