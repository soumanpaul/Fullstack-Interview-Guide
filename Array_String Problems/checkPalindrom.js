let str = 'madam'

function isPalindrome(str){
	var  len = str.length
	for(let i =0; i <len/2; i++){
		if(str[i]!=str[len-1-i]) return false	
	}
	return true;
}

console.log(isPalindrome(str))

function checkPalinDrom(str){
	return str == str.split('').reverse().join('')
}


