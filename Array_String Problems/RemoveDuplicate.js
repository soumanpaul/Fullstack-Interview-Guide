let str = 'Learn more javascript dude'

function removeDuplicate(str){
	var len = str.length
	var frequency={}
	var newStr=[]
	
	for(let i=0; i<len;i++){
		if(frequency[str[i]])
			frequency[str[i]]++;
		else frequency[str[i]]=1;	
	}

	for(let j in frequency){
		if(frequency[j]==1)
			newStr.push(j);
	}

	return newStr.join('')
}

console.log(removeDuplicate(str))