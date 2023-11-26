


// getNextLargerPalindromicNumber

function isPalindrome(num) {
    const numStr = num.toString();
    return numStr === numStr.split('').reverse().join('');
  }
function getNextLargerPalindromicNumber(input) {
    let num = input + 1;
    while (!isPalindrome(num)) {
      num++;
    }
    return num;
}
  
  // Example usage:
  const inputNumber = 123;
  const nextLargerPalindromicNumber = getNextLargerPalindromicNumber(inputNumber);
  console.log(`The next larger palindromic number after ${inputNumber} is ${nextLargerPalindromicNumber}.`);
  


//   Consider we have multiple async tasks A, B, C, D, and E ( not promises). A, B, and C are independent tasks while D
//  depends on A and B to perform its task while E depends on D and C to perform its task. Write a task function/class
//  to solve this problem. 

// Task A
async function taskA() {
    console.log("Task A: Starting...");
    // Simulate some asynchronous task
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Task A: Completed!");
  }
  
  // Task B
  async function taskB() {
    console.log("Task B: Starting...");
    // Simulate some asynchronous task
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Task B: Completed!");
  }
  
  // Task C
  async function taskC() {
    console.log("Task C: Starting...");
    // Simulate some asynchronous task
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Task C: Completed!");
  }
  
  // Task D depends on A and B
  async function taskD() {
    console.log("Task D: Starting...");
    await Promise.all([taskA(), taskB()]);
    // Simulate some asynchronous task
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Task D: Completed!");
  }
  
  // Task E depends on D and C
  async function taskE() {
    console.log("Task E: Starting...");
    await Promise.all([taskD(), taskC()]);
    // Simulate some asynchronous task
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Task E: Completed!");
  }
  
  // Call the main task function (taskE) to start the process
  taskE()
    .then(() => {
      console.log("All tasks completed successfully!");
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
  

// bind

let obj1 = {
  a: 'hello',
  func: function () {
    console.log(this.a);
  },
};
obj.func();
let func2 = obj.func.bind(obj);
func2();


// Output sequence

const a1 = 5;

if (true) {
  let y = 7
  var x = 5;
  console.log(a);
  console.log(x);
  console.log(y);
}

console.log(a)
console.log(x)


// 5 5 7 5 5

const a = 5;

function func() {
let y = 7
 var x = 5;
console.log(a);
console.log(x);
console.log(y);
}

func()
console.log(a)
console.log(x);
 


// Find sum of tree leaf node

let obj = {
  val: 12,
  subObjects: [
	  {val: 5, subObjects: []},
    	  {val: 3, subObjects: []}
  ]
}

function sumOfLeafNode (node) {
	// base case  
  if(!node || !node.subObjects || node.subObjects.length === 0){
	  return node ? node.val : 0; 
  }
  let sum = 0;
  for(let subTree of node.subObjects){
  	sum+= sumOfLeafNode(subTree);
  }
  return sum;
}

console.log(sumOfLeafNode(obj));


// Implement Debounce function
function debounce(callback, delay) {
  let timerId; 
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout( () => {
    		callback.apply(this,args)
    }, deelay)
  }
}


























const p = new Promise( (res,rej) => { res (1) } )

async function asyncReturn () { return p }

function basicReturn() { return Promise.resolve(p) }



console .log(p === basicReturn()); // guess the output
console .log(p === asyncReturn()); // guess the output

// What do you think the first 2 console logs will print?