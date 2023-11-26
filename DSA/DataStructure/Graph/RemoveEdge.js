const LL = require('../../LL/reverseLL')

class Graph{
	
	constructor(vertices) {	
		this.vertices = vertices
		this.list = []

		for(let it = 0; it < vertices; it++){
			let temp = new LL()
			this.list.push(temp)
		}
	}

	addEdge(source ,destination){
		if(source < this.vertices && destination < this.vertices){
			this.list[source].insertAtHead(destination)
			return this
		}
	}

	printGraph(){
		console.log(">>Adjacency List of Directed Graph<<")
		for(let i=0; i<this.list.length; i++){
			let temp = this.list[i].getHead()
			
			while(temp != null){
				console.log(temp.data)
				temp = temp.nextElement
			}
			// console.log("null...")
		}
	}

	strGraph() {
		let str = ""
		for(let  i=0; i < this.list.length; i++){
			let temp = this.list[i].getHead()
			while(temp != null){
				temp = temp.nextElement
			}
			str += null
		}
		return str;
	}
}

function removeEde(graph, source , dest){
	if(graph.list.length == 0)
		return graph
	if(source >= graph.list.length || source < 0)
		return graph;
	if(dest >= graph.list.length || dest < 0)
		return graph	
	
	graph.list[source].deleteVal(dest)
	return graph
}

let g = new Graph(5)
g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(1,3)
g.addEdge(2,4)
g.addEdge(4,0)

g.printGraph()

removeEde(g, 1,3)

g.printGraph()



