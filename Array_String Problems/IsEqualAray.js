let arr1 = [3,2,1,4,1]

let arr2 =[4,1,1,3,5] 


function IsEqual(arr1, arr2){
	
    if(arr1.length != arr2.length) return false
    arr1.sort()
    arr2.sort()
    for(let i = 0; i< arr1.length; i++){
        if(arr1[i]!=arr2[i]) return false
    }
    return true
}


console.log(IsEqual(arr1, arr2))


function IsEqual(arr1, arr2){
  if(arr1.length != arr2.length) return false
  let frequency = {}
  
  for(let i = 0; i< arr1.length; i++){
  	frequency[arr1[i]] = (frequency[arr1[i]] || 0) + 1;
    frequency[arr2[i]] = (frequency[arr2[i]] || 0) - 1;
  }
  
  for(let key in frequency){
      if (frequency[key] !== 0) {
      	return false;
	    }
  }
	return true
}


console.log(IsEqual(arr1, arr2))