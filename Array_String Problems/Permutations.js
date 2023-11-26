let str = 'souman'

function permutations(str){
	
	var arr = str.split('')
	var len = arr.length
	var perms = [], picked

	if(len == 0) return [str]

	for(var i=0; i <len; i++){
		rest = Object.create(arr);
		picked = rest.splice(i,1);

		restPerms = permutations(rest.join(''));

		for(var j=0, jLen = restPerms.length; j < jLen; j++){
			next = picked.concat(restPerms[j])
			perms.push(next.join(''))	
		}

	}

}

console.log(permutations(str))