let str = "I am the good boy"

function reverseInPlace(str){
	return str.split(' ').reverse().join(' ').split('').reverse().join('')
}

console.log(reverseInPlace(str))

