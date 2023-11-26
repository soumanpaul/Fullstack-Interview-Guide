// K-th Element of Two Sorted Arrays
// 

var arr1 = [ 2, 3, 6, 7, 9 ];
var arr2 = [ 1, 4, 8, 10 ];
var k = 5;


function kthElement(arr1, arr2, k){
	
	let ln1 = arr1.length
	let ln2 = arr2.length

	let sortedArr = []
	
	let i=0, j=0;
	
	while(i <ln1 && j < ln2 ){
		if(arr1[i] < arr2[j])
			sortedArr.push(arr1[i++]);
		else
			sortedArr.push(arr2[j++]);

	}
	while(i<ln1){
		sortedArr.push(arr1[i++]);
	}	
	while(j<ln2){
		sortedArr.push(arr2[j++]);
	}

	return sortedArr[k-1]

}


console.log(kthElement(arr1, arr2,k))
// 0(n)
// 0(n+m)


/*

Another Approach: (Using Min Heap)

Push the elements of both arrays to a priority queue (min-heap).
Pop-out k-1 elements from the front.
Element at the front of the priority queue is the required answer.

*/


function kthWithPQ(arr1, arr2, n, m, k) {
	
	let pq = [] // min heap

	for(let i=0; i<arr1.length; i++){
		pq.push(arr1[i]);
	}

	for(let i=0; i<arr2.length; i++){
		pq.push(arr2[i]);
	}

	pq.sort((a,b) => b-a);

	while(k-- > 1)
		pq.pop()
	return pq.pop();
}
// 0(nlongn)

// 0(k) solution

function findKthElement(A, B, m, n, k_req){
	
	let k = 0, i = 0, j= 0;
	
	while( i < m && j < n){
		if(A[i] < B[j]){
			k++;
			if(k== k_req)
				return A[i]
			i++;	
		}
		else{
			k++;
			if(k== k_req)
				return B[j];
			j++;	
		}
	}
	while(i < m){
		k++;
		if(k== k_req)
				return A[i]
			i++;
	}
	while(j < n){
		k++;
		if(k== k_req)
				return B[j]
			j++;
	}
	return -1;
}

console.log(findKthElement(arr1, arr2,arr1.length, arr2.length, k))


// 0(logn + logm)

function kth(arr1, arr2, end1, end2, k){
	if(arr1 == end1)
		return arr2[k];
	if(arr2 == end2)
		return arr1[k]
	
		let mid1 = (end1 - arr1)/2;
		let mid2 = (end2 - arr2)/2;
		if(mid1 + mid2 < k){
			if(arr1[mid1] > arr2[mid2])
				return kth(arr1, arr2 + mid2 + 1, end1, end2, k - mid2 - 1);
			else	
				return kth(arr1 + mid1 + 1, arr2, end1, end2, k - mid1 - 1)
		}
		else{
			if(arr1[mid1] > arr2[mid2])
				return kth(arr1, arr2, arr1+mid1, end2, k)
			else 
				return kth(arr1, arr2, end1, arr2+mid2, k);	
		}
}


function kth(arr1, arr2, m , n , k, st1, st2){
	
	if(st1 == m)
		return arr2[st2 + k - 1];
	
	if(st2 == n)
		return arr1[st1 + k - 1];
	
	if(k == 0 || k > (m - st1) + (n - st2))
		return -1;

	if(k == 1)
		return arr1[st1] < arr2[st2] ? arr1[st1] : arr2[st2];
	
	let curr = parseInt(k/2);

	if(curr - 1 >= m - st1){
		if(arr1[m-1] < arr2[st2 + curr - 1])
			return arr2[st2 + (k - (m - st1) - 1)]
		else 
			return kth(arr1, arr2, m, n , k - curr, st1, st2+curr);	
	}
	
	if(curr - 1 >= n - st2){
		if(arr2[n-1] < arr1[st1 + curr - 1])
			return arr1[st1 + (k - (n - st2) - 1)]
		else{
			return kth(arr1, arr2, m, n, k- curr, st1, st2+curr);
		}	
	}
}

