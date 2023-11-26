class Stack {
	
	constructor() {
		this.items = []
		this.top = null
	}

	size(){
		return this.items.length
	}
	isEmpty(){
		return this.items.length == 0
	}

	push(item){
		this.items.push(item)
		this.top = item
	}

	pop(){

		if(this.items.length != 0){
			if(this.items.length == 1){
				this.top = null
				return this.items.pop()
			}else {
				this.top= this.items[this.items.length -2]
				return this.items.pop();
			}
		}else return null
	}
}