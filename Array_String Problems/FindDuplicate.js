
let n = 7 
let arr = [1, 2, 3, 6, 3, 6, 1]

function findDuplicate(arr) {
	
	let duplicate = []
	let s = {};
	
	for(let i =0; i < arr.length; i++){
		s[arr[i]] = s[arr[i]] + 1 || 1;
	}

	for(let i in s){
		console.log(i)
		if(s[i] > 1) duplicate.push(i);
	}

	return duplicate;
}

// console.log(findDuplicate(array))

// The array can be used as a HashMap. 

// Frequency
// -  the input array can be used as a HashMap. While Traversing the array, 
// if an element ‘a’ is encountered then increase the value of a%n‘th element by n.
// The frequency can be retrieved by dividing the a % n’th element by n.
/*
Algorithm: 
Traverse the given array from start to end.
For every element in the array increment the arr[i]%n‘th element by n.
Now traverse the array again and print all those indexes i for which arr[i]/n is greater than 1. Which guarantees that the number n has been added to that index
This approach works because all elements are in the range from 0 to n-1 and arr[i] would be greater than n only if a value “i” has appeared more than once.

*/



function findDuplicateInON() {
	let ln = arr.length

	for(let i =0; i< ln; i++){
		arr[arr[i]%ln] = arr[arr[i]%ln] + ln;
	}

	let res =[ ]
	for(let i =0; i< ln; i++){
		if(arr[i] >= ln*2) res.push(i)
	}

	return res;
}

console.log(findDuplicateInON())

// Array is Sorted
/*
Observation: If an element ‘X’ is repeating, then it must be at index ‘X’ in the array. 
So the problem reduces to find any element whose value is same as its index.
*/

function findRepeatingElement(arr, low, high){
 
  // low = 0 , high = n-1;
  if (low > high) return -1;

  var mid = parseInt((low + high) / 2);

  // Check if the mid element is the repeating one
  if (arr[mid] != mid + 1){
	if (mid > 0 && arr[mid] == arr[mid - 1]) return mid;

	// If mid element is not at its position that means
	// the repeated element is in left
	return findRepeatingElement(arr, low, mid - 1);
  }

  // If mid is at proper position then repeated one is in
  // right.
  
  return findRepeatingElement(arr, mid + 1, high);
}