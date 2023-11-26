
class Node{
	constructor(data){
		this.data = data
		this.children = []
	}
	add(data){
		this.children.push(new Node(data));
	}
}

function treeWidths(root){
	const queue = [root, "reset"]
	const counters = [0]

	while(queue.length > 1){
		const node = queue.shift();

		if(node === "reset"){
			
		}
	}
}

describe("width of tree Levels", () => {
	it("should return width of each tree level", () => {
		const root = new Node(1)
		root.add(2)
		root.add(3)
		root.children[1].add(4)
		
		assert.deepEqual(treeWidths(root), [1,2,3])
	})
})

