
function BinaryIterative (arr, data) {
    let start = 0;
    let end = arr.length -1;

	while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (arr[mid] == data) return true;
        else if (arr[mid] > data) start = mid + 1;
        else end = mid - 1;
    }
    return false;
}



// Driver code
var arr = [1, 3, 5, 7, 8, 9];
var data = 8;

if (BinaryIterative(arr, data))
	console.log("Element found!");
else console.log("Element not found!");



