// Remove all even integers from an array

let arr = [4, 1, 9, 10, 15, 22, 5, 14]

function removeEven(arr){
	let newArr = []
	return arr.filter((item) => item%2 ==0)
}

console.log(removeEven(arr))