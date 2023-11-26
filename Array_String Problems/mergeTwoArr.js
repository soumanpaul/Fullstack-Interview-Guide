
let arr1 = [2,5,6] 
let arr2 = [1,2,3,29,92]

function mergeSortedArray(arr1, arr2){

	var merged = []
	var i1=0,i2=0, l1=arr1.length, l2=arr2.length;

	while(l1 > 0 && l2 > 0){
		if(arr1[i1] <= arr2[i2]){
			merged.push(arr1[i1++])
			l1--;
		}else {
			merged.push(arr2[i2++]);
			l2--;
		}
	}


	if(l1){
		merged = merged.concat(arr1.splice(i1));
	}else {
		merged = merged.concat(arr2.splice(i2));
	}

	return merged
}

console.log(mergeSortedArray(arr1,arr2))



