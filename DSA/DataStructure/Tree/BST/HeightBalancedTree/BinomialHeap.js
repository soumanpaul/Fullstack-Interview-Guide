// Javascript program for the above approach

class Node {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.children = [];
        this.degree = 0;
        this.marked = false;
    }
    }
    
    class BinomialHeap {
    constructor() {
        this.trees = [];
        this.min_node = null;
        this.count = 0;
    }
    
    is_empty() {
        return this.min_node === null;
    }
    
    insert(value) {
        let node = new Node(value);
        this.merge(new BinomialHeap(node));
    }
    
    get_min() {
        return this.min_node.value;
    }
    
    extract_min() {
        let min_node = this.min_node;
        this.trees.splice(this.trees.indexOf(min_node), 1);
        this.merge(new BinomialHeap(...min_node.children));
        this._find_min();
        this.count -= 1;
        return min_node.value;
    }
    
    merge(other_heap) {
        this.trees = [...this.trees, ...other_heap.trees];
        this.count += other_heap.count;
        this._find_min();
    }
    
    _find_min() {
        this.min_node = null;
        for (let tree of this.trees) {
        if (this.min_node === null || tree.value < this.min_node.value) {
            this.min_node = tree;
        }
        }
    }
    
    decrease_key(node, new_value) {
        if (new_value > node.value) {
        throw new Error("New value is greater than current value");
        }
        node.value = new_value;
        this._bubble_up(node);
    }
    
    delete(node) {
        this.decrease_key(node, -Infinity);
        this.extract_min();
    }
    
    _bubble_up(node) {
        let parent = node.parent;
        while (parent !== null && node.value < parent.value) {
        [node.value, parent.value] = [parent.value, node.value];
        [node, parent] = [parent, node];
        }
    }
    
    _link(tree1, tree2) {
        if (tree1.value > tree2.value) {
        [tree1, tree2] = [tree2, tree1];
        }
        tree2.parent = tree1;
        tree1.children.push(tree2);
        tree1.degree += 1;
    }
    
    _consolidate() {
        let max_degree = Math.floor(Math.log2(this.count)) + 1;
        let degree_to_tree = new Array(max_degree + 1).fill(null);
    
        while (this.trees.length) {
        let current = this.trees.shift();
        let degree = current.degree;
        while (degree_to_tree[degree] !== null) {
            let other = degree_to_tree[degree];
            degree_to_tree[degree] = null;
            if (current.value < other.value) {
            this._link(current, other);
            } else {
            this._link(other, current);
            }
            degree += 1;
        }
        degree_to_tree[degree] = current;
        }
    
        this.min_node = null;
        this.trees = degree_to_tree.filter((tree) => tree !== null);
    }
    
    get length() {
        return this.count;
    }
    }
    
    // This code is contributed by sdeadityasharma
    