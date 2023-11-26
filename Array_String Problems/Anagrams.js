function Anagrams(s1, s2) {

	let l1 = s1.length
	let l2 = s2.length
	
	if(l1 != l2) return false
	
	let check = {}

	for(let i =0; i < l1; i++){
		check[s1[i]] = check[s1[i]] + 1 || 1;		
		check[s2[i]] = check[s2[i]] - 1 || 1;
	}

	for(let i=0; i< 256; i++){
		if(check[i] != undefined) return false
	}

	return true;
}

console.log(Anagrams("a", "a"))