function  MaxCharacter(str) {
	let counts = {}
	let max = 0
	let obj = ''
	for(let i=0; i<str.length;i++){
		if(counts[str[i]])
			counts[str[i]]++;
		else counts[str[i]]=1	
		
		if(counts[str[i]] > max){
			max = counts[str[i]]
			obj = str[i]
		}
	}
	
	return obj;
}

console.log(MaxCharacter("aabbccc"))