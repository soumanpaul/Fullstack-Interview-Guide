const numbers = ['one', 'two', 'four', 'five']
numbers.splice(2, 0, 'three');

console.log(numbers)


const insert = (arr, index, ...newItems) => [
	...arr.slice(0, index),
	...newItems,
	...arr.slice(index)
  ]
  