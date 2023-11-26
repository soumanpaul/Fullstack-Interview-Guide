let str = 'you are a nice dude'

function reverseWord(str){
	let s = str.split(" ").reverse()
	console.log(s)
}


function reverseWords(str){
	var rev = []
	var wordLen = 0;

	for(var i = str.length-1; i>=0; i--){
		if(str[i]==' ' || i==0){
			rev.push(str.substr(i,wordLen+1))
			wordLen = 0;
		}
		else wordLen++;
	}
	return rev.join(' ');
}

console.log(reverseWords(str))