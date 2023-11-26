const minHeapify = (heap, index) => {
    let left = index * 2
    let right = (index * 2) + 1
    let smallest = index
    if ((heap.length > left) && (heap[smallest] > heap[left])) {
        smallest = left
    }
    if ((heap.length > right) && (heap[smallest] > heap[right]))
        smallest = right
    if (smallest != index) {
        let tmp = heap[smallest]
        heap[smallest] = heap[index]
        heap[index] = tmp
        minHeapify(heap, smallest)
    }
    return heap
}
const convertMax = (maxHeap) => {
    for (let i = Math.floor((maxHeap.length) / 2); i > -1; i--)
        maxHeap = minHeapify(maxHeap, i)
    return maxHeap
}
let maxHeap = [9,4,7,1,-2,6,5]
console.log(convertMax(maxHeap))