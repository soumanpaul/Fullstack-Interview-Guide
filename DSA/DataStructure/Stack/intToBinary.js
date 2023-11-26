class Queue {

	constructor() {
		this.items = []
		this.front = null
		this.back = null
	}
	isEmpty() {
		return this.items.length == 0
	}
	getFront(){
		if(this.items.length != 0)
			return this.items[0];
		else return null	
	}
	size() {
		return this.items.length
	}
	enqueue(element){
		this.items.push(element)
	}
	dequeue(){
		if(this.items.length == 0)
			return null
		else return this.items.shift()	
	}
}


const generateBinaryNumbers = (n) => {
	let result = []
	let myQueue = new Queue()
	let s1, s2;
	myQueue.enqueue('1')
	for(let i=0; i< n; i++){
		result.push(myQueue.dequeue())
		s1 = result[i] + "0"
		s2 = result[i] + "1"
		myQueue.enqueue(s1)
		myQueue.enqueue(s2)
	}
	return result
}

console.log(generateBinaryNumbers(10))