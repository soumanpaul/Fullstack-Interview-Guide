var s = "gEeksfOrgEEkS";

function getSortedString(str){

	let len = str.length;
	
	let v1 = [], v2 = [], p=0,q=0;

	for(let i =0; i<len; i++){
		if(str[i] <'a')
			v1.push(str[i]);
		else v2.push(str[i]);	
	}

	v1.sort()
	v2.sort()

	for(let i=0; i< len; i++){
		if(str[i]<'a')
			str[i] = v1[p++];
		else str[i] = v2[q++];	
	}

	return str;
}

console.log(getSortedString(s))