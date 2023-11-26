class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {

  }
}

var list = new SinglyLinkedList()
list.push("Hello");
list.push("Goodbye");