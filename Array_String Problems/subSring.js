let str = "abbcdabbbbbck"
let subStr = "bck"

function subStringFinder(str, subStr){
	var idx = 0;
	var len = str.length
	var subLen = subStr.length

	for(let i=0, j=0; i < len; i++){
		if(str[i] == subStr[j]) 
			j++;
		else j=0;
		
		if(j==0)
			idx=i
		else if(j==subLen)
			return idx;	
	}
	return -1
}

console.log(subStringFinder(str,subStr))

//doesn't work for this one.
// > subStringFinder('abbcdabbbbbck', 'bbbck')  

