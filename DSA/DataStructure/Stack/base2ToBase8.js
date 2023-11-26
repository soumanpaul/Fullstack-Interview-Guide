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

function convertBase(num, base){
	let s = new Stack()
	while(num > 0){
		s.push(num % base)
		num = Math.floor(num/=base);
	}
	let converted = ""
	while(s.size() > 0){
		converted += s.pop()
	}
	return converted
}
