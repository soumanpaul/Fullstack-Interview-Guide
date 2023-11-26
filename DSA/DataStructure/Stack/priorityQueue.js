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
		let priority = this.items[0].code
		for(let i=1; i < this.dataStore.length; ++i){
			if(this.dataStore[i].code < priority){
				priority = i;
			}
		}
		return this.dataStore.splice(priority, 1)
	}
}

const Patient = (name, code) => {
	this.name = name;
	this.code = code
}

let p = new Patient("Souman", 5)
let ed = new Queue()
ed.enqueue(p)
p = new Patient("Pratik", 7)
ed.enqueue(p)

