
let arr = [1,3,3,3,1,5,6,7,8,1]

function removeDuplicates(arr) {

	var exists = {}
	var output = []
	var elm;

	for(var i = 0; i < arr.length; i++) {
		elm = arr[i]
		if(!exists[elm]){
			output.push(elm);
			exists[elm] = true;
		}
	}
	return output;
}

console.log(removeDuplicates(arr));