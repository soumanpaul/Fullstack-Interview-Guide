// How  flatten nested array in javascript? 

let arr = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]
// 1
let flat1 = arr.flat(Infinity)

// 2
function flatten(array, ret = []) {
	return array.reduce((ret, entry) => {
		if (Array.isArray(entry)) {
			flatten(entry, ret);
		} else {
			ret.push(entry);
		}
		return ret;
	}, ret)
}

// 3
function flatten(array, ret = []) {
	for (let entry of array) {
		if (Array.isArray(entry)) {
			flatten(entry, ret);
		} else {
			ret.push(entry);
		}
	}
	return ret;
}


// 3
function flatten1(arr) {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten1(arr[i]))
		} else {
			result.push(arr[i])
		}
	}
	return result
}

const flat2 = flatten(arr, [])
console.log(flat2)

// flatten array (reduce + concat + isArray + recursivity)
function flatDeep(arr, deep=1){
	return deep > 0 ? arr.reduce((acc,value) => acc.concat(Array.isArray(value) 
				? flatDeep(value, d-1): value),[]) : arr.slice()
}
flatDeep(arr, Infinity)

// flatren with stack

function flattenWithStack(input){
	const stack = [...input]
	const res=[]
	while(!stack.length){
		const next = stack.pop();
		if(Array.isArray(next)){
			stack.push(...next);
		}else {
			res.concat(next)
		}
	}
	return res.reverse;
}

// with Generator function

function* flatrenWithGenerator(arr, deep){
	if(deep==undefined){
		deep = 1;
	}
	for(const item of arr){
		if(Array.isArray(item) && deep > 0){
			yield* flatrenWithGenerator(item, deep-1)
		}else {
			yield item;
		}
	}
}
const flattenGenerator = [...flatrenWithGenerator(arr,Infinity)]


// 2) print unique values from an array
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

function findUnique(arr) {
	let unique = []
	unique.push(arr[0]);
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] != arr[i]) unique.push(arr[i]);
	}
	return unique;
}

// time: 0(n), Space : number of unique element in the array;

console.log(findUnique(arrOfNum))

// 3) How could you destructure array elements?

const address = ["583, Margaret Street", "LOS ANGELES, CA", "USA"];

const [add1, add2, add3] = address



console.log(add1, add2, add3)

//  4) add a new element at the beginning of an array
let items_list = [1, 2, 3, 4, 5, 6, 7];
items_list.unshift(100);

// add a new element at the end of an array
items_list.push(100);

// remove the last element from an array
let popResult = items_list.pop();

// will remove the first element from an array 
let shiftResult = items_list.shift();

// Rotate element to the left side
let shiftResult1 = items_list.shift();
items_list.push(shiftResult1);

// Rotate element to the right side
let popResult1 = items_list.pop()
items_list.unshift(popResult1);




// Write a function that takes an array of strings as argument
// Return the longest string

function myFunction(arr){
	
	return 
}
console.log(myFunction(['I', 'need', 'candy']))