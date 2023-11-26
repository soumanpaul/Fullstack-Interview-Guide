let arr = [1, 1, 2, 2, 2, 2, 3]   
let x = 1

//  0(logn + count)
function frequency(arr, x, left, right) {

	if( left > right) return -1;
	
	let mid = left + (right-left)/2;

	if(arr[mid]==x)
		return mid;

	if(arr[mid] > x){
		frequency(arr, x, left , mid-1);
	}
	return frequency(arr, x, mid+1 , right);
}

function CountOccurence(arr, n, x){
	let ind = frequency(arr,x, 0,n);

	if(ind == -1) return 0;

	let count = 1;
	let left = ind -1;
	while(left >= 0 && rr[left] == x){
		left--
		count++
	}

	let right = ind + 1
	while(right < n && arr[right]==x){
		count++
		right++
	}
	return count;
}

console.log(frequency(arr,x, 0, arr.length))

// Approch 2
// Find lower and higher index of elment

function count(arr, x, n){
	
	let i, j;

	i = first(arr, 0, n-1,x,n);

	if(i==-1) return i;

	j = last(arr, 0, n-1, x, n)

	return j - i + 1; 
}

function first(arr, low, hight, x, n){
	
	if(high >= low){
		
		let mid = (low+high)/2;
		
		if((mid == 0 || x > arr[mid -1]) && arr[mid] == x)
			return mid;
		else if(x > arr[mid])
			return first(arr, (mid+1), hight, x, n);
		else 
			return first(arr, low, (mid - 1), x, n);		
	}
	return -1;
}

function last(arr, low, high, x, n){
    if (high >= low){
        /*low + (high - low)/2;*/     
        let mid = Math.floor((low + high) / 2);
        if ((mid == n - 1 || x < arr[mid + 1]) &&
        arr[mid] == x)
            return mid;
        else if (x < arr[mid])
            return last(arr, low, (mid - 1), x, n);
        else
            return last(arr, (mid + 1), high, x, n);     
    }
    return -1;
}

// If x is present in arr[] then returns the
// index of LAST occurrence of x in arr[0..n-1],
// otherwise returns -1
function last(arr, low, high, x, n)
{
    if (high >= low)
    {
        /*low + (high - low)/2;*/     
        let mid = Math.floor((low + high) / 2);
        if ((mid == n - 1 || x < arr[mid + 1]) &&
        arr[mid] == x)
            return mid;
        else if (x < arr[mid])
            return last(arr, low, (mid - 1), x, n);
        else
            return last(arr, (mid + 1), high, x, n);     
    }
    return -1;
}
 