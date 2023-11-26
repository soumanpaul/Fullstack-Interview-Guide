// Example min heap
let minHeap = new PriorityQueue();
minHeap.enqueue(4);
minHeap.enqueue(6);
minHeap.enqueue(8);
minHeap.enqueue(9);
minHeap.enqueue(10);

let element = 6; // Element to search for
let found = false;

// Copy the min heap to a temporary queue and search for the element
let temp = new PriorityQueue(minHeap);
while (temp.size() > 0) {
	if (temp.peek() == element) {
		found = true;
		break;
	}
	temp.dequeue();
}

if (found) {
	console.log("Element found in the min heap.");
} else {
	console.log("Element not found in the min heap.");
}
