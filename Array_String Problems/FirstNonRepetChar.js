let str = 'the quick brown fox jumps then quickly blow air'

function firstNon(str){
	let obj = {}
	let char;
	for(let i=0; i < str.length; i++){
		if(str[i]!=" "){
			if(obj[str[i]] > 0) return char;
			if(obj[str[i]])
				obj[str[i]]++
			else obj[str[i]]=1
			char = str[i];
		}
	}
	console.log(obj)
}
console.log(firstNon(str))