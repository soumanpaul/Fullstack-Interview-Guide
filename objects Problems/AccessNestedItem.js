var data = {
    code: 42,
    items: [{
        id: 1,
        name: 'foo'
    }, {
        id: 2,
        name: 'bar'
    }]
};


function findItem(item) {

	let result = null
	for(var key in item) {
		if(item[key] instanceof Array) {
			for(var i = 0; i < item[key].length; i++) {
				result = findItem(item[key]);
				if(result != null) break;
			}
		}else {
			if(item[key].id == 2){
				return item[key].name;
			}
		}
	}
	return result;
}

console.log("================================", findItem(data))



// Second function
const root = {
    leftChild: {
        leftChild: {
            leftChild: null,
            rightChild: null,
            data: 42
        },
        rightChild: {
            leftChild: null,
            rightChild: null,
            data: 5
        }
    },
    rightChild: {
        leftChild: {
            leftChild: null,
            rightChild: null,
            data: 6
        },
        rightChild: {
            leftChild: null,
            rightChild: null,
            data: 7
        }
    }
};

function getLeaf(node) {
    if (node.leftChild) {
        return getLeaf(node.leftChild);
    } else if (node.rightChild) {
        return getLeaf(node.rightChild);
    } else { // node must be a leaf node
        return node;
    }
}

console.log(getLeaf(root).data);
