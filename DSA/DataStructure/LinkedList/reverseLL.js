class Node {
	constructor(data){
		this.data = data;
		this.nextElement = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}

	insertAtHead(newData){
		let tempNode = new Node(newData);
		tempNode.nextElement = this.head;
		this.head = tempNode
		return this
	}
	isEmpty() {
		return this.head==null
	}

	getHead(){
		return this.head;
	}
	printList() {
		if (this.isEmpty()) {
		  console.log("Empty List");
		  return false;
		} else {
		  let temp = this.head;
		  while (temp != null) {
			process.stdout.write(String(temp.data));
			process.stdout.write(" -> ");
			temp = temp.nextElement;
		  }
		  console.log("null");
		  return true;
		}
	}
	setHead(newHead) {
		this.head= newHead
		return this
	}
	getListStr(){
		if(this.isEmpty()){
			return null
		}else {
			let st = ""
			let temp = this.head
			while(temp !=null){
				st += String(temp.data)
				st += "->"
				temp = temp.nextElement
			}
			st += "null"
			return st;
		}
	}
	insertAtTail(newData){
		let node = new Node(newData)
		if(this.isEmpty()){
			this.head = node;
			return this;
		}
		let currentNode = this.head;

		while(currentNode.nextElement != null){
			currentNode = currentNode.nextElement
		}
		currentNode.nextElement = node
		return this;
	}
	search(value){
		let currentNode = this.head

		while(currentNode != null){
			if(currentNode.data == value){
				return true
			}
		}
	}

	deleteAtHead(){
		if(this.isEmpty()){
			return this;
		}
		let firstElement = this.head
		
		this.head = firstElement.nextElement;
		return this;
	}

	deleteVal(value){
		let deleted = null
		
		if(this.isEmpty()){
			return false;
		}

		let currentNode = this.head
		if(currentNode.data == value){
			this.head = currentNode.nextElement
			return this
		}
		while(currentNode.nextElement != null){
			if(currentNode.nextElement.data == value){
				currentNode.nextElement = currentNode.nextElement
				return true;
			}
			currentNode = currentNode.nextElement
		}
		deleted= false
		return deleted
	}

	deleteAtTail(){
		if(this.isEmpty()){
			return this;
		}
		let firstNode = this.head;
		if(firstNode.nextElement == null){
			this.deleteAtHead()
			return this
		}
		while(firstNode.nextElement.nextElement != null)
			firstNode = firstNode.nextElement
		firstNode.nextElement = null;
		return this;	
	}

	
}

function reverse() {
	let previousNode = null
	let currentNode = list.getHead()
	let nextNode = null

	while(currentNode != null){
		nextNode = currentNode.nextElement
		currentNode.nextElement = previousNode
		previousNode=currentNode
		currentNode = nextNode
	}
	list.setHead(previousNode)
}

let list = new LinkedList()
list.insertAtHead(4)
list.insertAtHead(9)
list.insertAtHead(6)
list.insertAtHead(1)
list.insertAtHead(0)
// list.printList()
reverse(list)
// list.printList()

module.exports = LinkedList