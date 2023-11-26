
// cal(3).add(2).add(3).sub(1).mul(4).sub(1).val() 

function cal(initialValue) {

  let result = initialValue;
  
  function add(num) {
    result += num;
    return this;
  }
  
  function sub(num) {
    result -= num;
    return this;
  }
  
  function mul(num) {
    result *= num;
    return this;
  }
  
  function val() {
    return result;
  }
  
  return {
    add,
    sub,
    mul,
    val
  };
}
  

const result1 = cal(3).add(2).add(3).sub(1).mul(4).sub(1).val();
console.log(result1); // Output: 27


// Object - obj.b(3).c(5).b(10).val();

let obj = {
  a: 2,
  b(n) {  
      this.a += n; 
      return this; 
  },
  c(n) {
      this.a += n;
      return this;
  },
  val() {
      return this.a;
  }
};

// Chain method calls to update property 'a'
let result = obj.b(3).c(5).b(10).val();
console.log(result); // Output will be 20

  
// Find Duplicate

let list = [1, 5, 8, 4, 5, 6, 8, 5, 3]

function findDuplicate(list){

  let frequencyMap = new Map()
  let duplicateArray = []
  
  for(const num of list){
      if(frequencyMap.has(num)){
        let fre = frequencyMap.get(num);
        frequencyMap.set(num, fre+1)
        
        if(fre+ 1 >= 2){
          console.log(num)
          duplicateArray.push(num)
        }
      }else {
        frequencyMap.set(num, 1);
      }
  }
  return duplicateArray
} 

findDuplicate(list) 


// Traverse a Tree

let tree = {
	name : "root",
  children :  [
  	{
    name: "Org1",
    children: [
    	{
      	name: "Dept1",
        children: []
      },
      {
      	name: "Dept2",
        children: [
        	{
          	name: "Segment1",
            children: []
          },
          	{
          	name: "Segment2",
            children: []
          }
        ]
      }
    ]
    },
    {
    name: "Org2",
    children: [
    	{
      	name: "Dept3",
        children: []
      }
    ]
    },
  ]
}


function traversTheTree(tree){
	console.log(tree.name)
  
  if(tree.children){
  	for(const child of tree.children){
	      traversTheTree(child)
    }
  }
  return;
}

traversTheTree(tree);






function cal(initialValue) {
  let result = initialValue;

  function add(num) {
    result += num;
    return this;
  }

  function sub(num) {
    result -= num;
    return this;
  }

  function mul(num) {
    result *= num;
    return this;
  }

  function val() {
    return result;
  }

  return {
    add,
    sub,
    mul,
    val
  };
}

const result11 = cal(3).add(2).add(3).sub(1).mul(4).sub(1).val();
console.log(result); // Output: 27


//  Function Constructor 

function Calculator(initialValue) {
  this.result = initialValue;

  this.add = function(num) {
    this.result += num;
    return this;
  };

  this.sub = function(num) {
    this.result -= num;
    return this;
  };

  this.mul = function(num) {
    this.result *= num;
    return this;
  };

  this.val = function() {
    return this.result;
  };
}

const calculator = new Calculator(3);
const result2 = calculator.add(2).add(3).sub(1).mul(4).sub(1).val();
console.log(result1); // Output: 27
